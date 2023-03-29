import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
  role: string;
  type: string;
  rf_token?: string;
  _doc: object;
}
