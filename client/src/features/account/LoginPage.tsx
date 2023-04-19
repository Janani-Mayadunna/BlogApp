import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState, MouseEvent, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./LoginPage.css";
import {
  getCurrentUser,
  loginRequest,
  setLoggedIn,
} from "../../store/auth/actions";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const token = localStorage.getItem("jwt-blogapp");
  console.log("TOOK", token);
  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, []);

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    let data: any = {
      values: {
        email: user.email,
        password: user.password,
      },
    };
    dispatch(loginRequest(data));

    const token = localStorage.getItem("jwt-blogapp");
    console.log("TOOK3", token);
    console.log(data);
  }

  return (
    <Container className="loginContainer">
      <form>
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
          <Link to="/home" style={{ textDecoration: "none" }}>
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
          </Link>
          <Button sx={{ marginTop: 2, borderRadius: 2 }}>
            <Link to="/signup"> New here? Sign Up</Link>
          </Button>
        </Box>
      </form>
    </Container>
  );
}
