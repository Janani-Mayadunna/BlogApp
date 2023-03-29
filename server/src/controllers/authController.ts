import { Request, Response } from "express";
import Users from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
import { IUser } from "../../config/interfaces";
import {
  generateActiveToken,
  generateAccessToken,
  generateRefreshToken,
} from "../../config/generateToken";

export const registerUser = async (req: Request, res: Response) => {
  const salt = await bcrypt.genSalt(10);

  const hashedPswrd = await bcrypt.hash(req.body.password, salt);

  req.body.password = hashedPswrd;

  const newUser = new userModel(req.body);
  const { email } = req.body;

  try {
    // checks if the provided username already exists in the database by calling UserModel.findOne method
    const oldUser = await userModel.findOne({ email });

    // if old user exists
    if (oldUser) {
      return res.status(400).json({ message: "Username already used" });
    }
    // If the username is available, it saves the new user to the database by calling the mongoose save method on newUser.
    const user = await newUser.save();

    // generates a JSON web token with the provided JWT_KEY, and sets the token to expire in one hour
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_KEY!,
      { expiresIn: "1h" }
    );

    //store user and token in local storage and redux store
    // user and token are sent in the response as a JSON object with a status code of 200.
    res.status(200).json({ user, token }); //200 success
  } catch (error: any) {
    res.status(500).json({ message: error.message }); //500 server error
  }
};

// USer login

export const loginUser = async (req: Request, res: Response) => {
  //destructure username and password from the body  of the request
  const { email, password } = req.body;

  //find a user with this username that comes along with the http request in userModel
  //if it exists in the DB return it to cont user
  try {
    const user = await userModel.findOne({ email: email });

    //if this user exists
    if (user) {
      //hashing the normal password
      const passwordStatus = await bcrypt.compare(password, user.password);

      //if password user entered and the encrypted paswrd are not valid
      if (!passwordStatus) {
        res.status(400).json("Wrong Password");
      } else {
        // f the password is correct, a JSON Web Token (JWT) is generated
        const token = jwt.sign(
          { username: user.email, id: user._id },
          process.env.JWT_KEY!,
          { expiresIn: "1h" }
        );
        // token is then returned in the response body along with the user data
        res.status(200).json({ user, token });
      }
      // when no matchign user found
    } else {
      res.status(404).json("Invalid User : User doesn't exist");
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// export const register = async (req: Request, res: Response) => {
//   try {
//     const { name, email, password } = req.body;

//     const user = await userModel.findOne({ email });
//     if (user)
//       return res
//         .status(400)
//         .json({ msg: "Email or Phone number already exists." });

//     const passwordHash = await bcrypt.hash(password, 12);

//     const newUser = { name, email, password: passwordHash };

//     const active_token = generateActiveToken({ newUser });

//     res.json({ status: "OK", msg: "Registered!", data: newUser, active_token });
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message });
//   }
// };
