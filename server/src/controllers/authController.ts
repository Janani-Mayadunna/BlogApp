import User from "../models/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { Jwt, JwtPayload } from "jsonwebtoken";
import { generateJwt } from "../../middleware/jwtMethods";

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const emailCheck = await User.findOne({ email: email });

  if (emailCheck) {
    return res.status(403).json({ error: "Couldn't create user" });
  }

  const user = new User(req.body);

  try {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    user.save();
    return res.status(201).json({ message: "SignUp Successful!" });
  } catch (error) {
    return res.status(500).json({ error: "Server error!!!" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  //check if user exists
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  //make sure passwords match
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(403).json({ error: "Check credentials" });
  }

  //return a jwt token
  const token = await generateJwt(user._id, user.email);
  return res.status(200).json({ token });
};

export const getCurrentUser = async (req: Request, res: Response) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(404).json({ message: "Authentication token not found" });
  }
  try {
    const token_info: Jwt | JwtPayload | string | any = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );
    const user = await User.findOne({ email: token_info.email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const { email, role, name, ...extraUserData } = user;
    return res.status(200).json({ name, email, role });
  } catch (error) {
    return res.status(500).json({ error: "Couldn't get current user" });
  }
};
