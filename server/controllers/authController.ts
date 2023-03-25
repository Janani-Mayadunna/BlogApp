import { Request, Response } from "express";
import Users from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
import { IUser } from "../config/interfaces";
import {
  generateActiveToken,
  generateAccessToken,
  generateRefreshToken,
} from "../config/generateToken";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, account, password } = req.body;

    const user = await userModel.findOne({ account });
    if (user)
      return res
        .status(400)
        .json({ msg: "Email or Phone number already exists." });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = { name, account, password: passwordHash };

    const active_token = generateActiveToken({ newUser });

    res.json({ status: "OK", msg: "Registered!", data: newUser, active_token });

    //    const url = `${CLIENT_URL}/active/${active_token}`;

    //    if (validateEmail(account)) {
    //      sendMail(account, url, "Verify your email address");
    //      return res.json({ msg: "Success! Please check your email." });
    //    } else if (validPhone(account)) {
    //      sendSms(account, url, "Verify your phone number");
    //      return res.json({ msg: "Success! Please check phone." });
    //    }
  } catch (err: any) {
    return res.status(500).json({ msg: err.message });
  }
};

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { account, password } = req.body;

//     const user = await userModel.findOne({ account });
//     if (!user)
//       return res.status(400).json({ msg: "This account does not exits." });

//     // if user exists
//     loginUser(user, password, res);
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message });
//   }
// };

// const loginUser = async (user: IUser, password: string, res: Response) => {
//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) {
//     let msgError =
//       user.type === "register"
//         ? "Password is incorrect."
//         : `Password is incorrect. This account login with ${user.type}`;

//     return res.status(400).json({ msg: msgError });
//   }

//   const access_token = generateAccessToken({ id: user._id });
//   // const refresh_token = generateRefreshToken({ id: user._id });

//   res.json({
//     msg: "Login Success!",
//     access_token,
//     user: { ...user._doc, password: "" },
//   });
// };

// export const logout = async (req: Request, res: Response) => {
//   // if (!req.user) return res.status(400).json({ msg: "Invalid Authentication." });

//   try {
//     res.clearCookie("refreshtoken", { path: `/auth/refresh_token` });

//     return res.json({ msg: "Logged out!" });
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message });
//   }
// };

// export const refreshToken = async (req: Request, res: Response) => {
//   try {
//     const rf_token = req.cookies.refreshtoken;
//     console.log(req.cookies);
//     res.json({ msg: "Sucess!" });
//   } catch (err: any) {
//     return res.status(500).json({ msg: err.message });
//   }
// };
