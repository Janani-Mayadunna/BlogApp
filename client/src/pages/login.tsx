import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  console.log(isSignUp);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };

  const resetState = () => {
    setIsSignUp(!isSignUp);
    setInput({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "45ch",
            margin: "auto",
            marginTop: "5ch",
            padding: "5ch",
            borderRadius: "2ch",
            boxShadow: "5px 5px 5px 10px #ccc",
            ":hover": { boxShadow: "10px 10px 20px #ccc" },
          }}
        >
          <Typography variant="h4" paddingBottom={3} textAlign="center">
            {isSignUp ? "Sign Up" : "Login"}
          </Typography>
          {isSignUp && (
            <TextField
              name="name"
              value={input.name}
              margin="normal"
              type={"text"}
              label="Name"
              variant="outlined"
              onChange={handleChange}
            ></TextField>
          )}
          <TextField
            name="email"
            value={input.email}
            margin="normal"
            type={"text"}
            label="E-mail or Phone"
            variant="outlined"
            onChange={handleChange}
          ></TextField>
          <TextField
            name="password"
            value={input.password}
            margin="normal"
            type={"password"}
            label="Password"
            variant="outlined"
            onChange={handleChange}
          ></TextField>
          {isSignUp && (
            <TextField
              name="confirmPassword"
              value={input.confirmPassword}
              margin="normal"
              type={"password"}
              label="Confirm Password"
              variant="outlined"
              onChange={handleChange}
            ></TextField>
          )}
          <Button
            endIcon={isSignUp ? <HowToRegOutlinedIcon /> : <LoginIcon />}
            type="submit"
            sx={{ borderRadius: 2 }}
            variant="contained"
            color="warning"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
          <Button onClick={resetState} sx={{ marginTop: 2, borderRadius: 2 }}>
            {isSignUp ? "Have an Account? Login" : " New here? Sign Up"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
