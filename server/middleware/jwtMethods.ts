import { Types } from "mongoose";
import jwt from "jsonwebtoken";

export const generateJwt = (id: Types.ObjectId, email: string) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { id, email },
      process.env.JWT_SECRET!,
      { expiresIn: "6h" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};
