import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
// import { RootState, AppDispatch } from "../redux/store";

const Login = () => {
  // const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    password: "",
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

    // dispatch(logIn(input));
  };

  const resetState = () => {
    setInput({ email: "", password: "" });
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
            Login
          </Typography>
          <TextField
            name="email"
            value={input.email}
            margin="normal"
            type={"text"}
            label="E-mail"
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

          <Button
            endIcon={<LoginIcon />}
            type="submit"
            sx={{ borderRadius: 2, margin: 4, width: "50%", height: "3rem" }}
            variant="contained"
            color="warning"
          >
            Login
          </Button>
          <Button onClick={resetState} sx={{ marginTop: 2, borderRadius: 2 }}>
            New here? Sign Up
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
