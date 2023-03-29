import mongoose from "mongoose";
import { IUser } from "../config/interfaces";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
      maxLength: [30, "Your name cannot exceed 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      //   minLength: [6, "Your password must be at least 6 characters"],
      trim: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
    role: {
      type: String,
      default: "user", // admin
    },
    type: {
      type: String,
      default: "normal", // fast
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model<IUser>("Users", userSchema);
export default userModel;
