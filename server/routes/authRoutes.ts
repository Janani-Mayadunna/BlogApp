import express from "express";
import { register } from "../controllers/authController";
import { validRegister } from "../middleware/valid";

const router = express.Router();

router.post("/register", validRegister, register);
// router.post("/login", login);
// router.get("/logout", logout);
// router.get("/refresh_token", refreshToken);

export default router;
