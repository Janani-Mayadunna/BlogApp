import { Router } from "express";
import {
  getCurrentUser,
  loginUser,
  signUp,
} from "../controllers/authController";

const router: Router = Router();

//  "api/auth/signup"
router.get("/currentuser", getCurrentUser);
router.post("/login", loginUser);
router.post("/signup", signUp);

export default router;
