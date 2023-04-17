import { Schema, model } from "mongoose";

export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
  },
  {
    timestamps: true,
  }
);

export default model<User>("User", UserSchema);
