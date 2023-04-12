import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState, MouseEvent } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { loginUser } from "./accountSlice";
import "./LoginPage.css";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(loginUser(user));
    // <Link to={"/"}>Login</Link>;
  }

  return (
    <Container className="loginContainer">
      <form
      //   onSubmit={handleSubmit}
      >
        <Box
          sx={{
            backgroundColor: "rgba(79, 81, 140, 0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "45ch",
            margin: "auto",
            marginTop: "5ch",
            padding: "5ch",
            borderRadius: "2ch",
          }}
        >
          <Typography variant="h4" paddingBottom={3} textAlign="center">
            Login
          </Typography>
          <TextField
            name="email"
            value={user.email}
            margin="normal"
            type={"text"}
            label="E-mail"
            variant="outlined"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <TextField
            name="password"
            value={user.password}
            margin="normal"
            type={"password"}
            label="Password"
            variant="outlined"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <Button
            endIcon={<LoginIcon />}
            onClick={handleSubmit}
            type="submit"
            sx={{ borderRadius: 2, margin: 4, width: "50%", height: "3rem" }}
            variant="contained"
            color="warning"
          >
            Login
          </Button>
          <Button
            //   onClick={resetState}
            sx={{ marginTop: 2, borderRadius: 2 }}
          >
            <Link to="/signup"> New here? Sign Up</Link>
          </Button>
        </Box>
      </form>
    </Container>
  );
}
