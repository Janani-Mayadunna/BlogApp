import { Request, Response, NextFunction } from "express";

export const validRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ msg: "Please add your name!" });
  } else if (name.length > 20) {
    return res
      .status(400)
      .json({ msg: "Your name is long than 20 characters" });
  }

  if (!email) {
    return res.status(400).json({ msg: "Please add your email." });
  } else if (!validateEmail(email)) {
    return res.status(400).json({ msg: "Email format is incorrect." });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: "Password must be at least 6 characters." });
  }

  next();
};

export function validPhone(phone: string) {
  const re = /^[+]/g;
  return re.test(phone);
}

export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
