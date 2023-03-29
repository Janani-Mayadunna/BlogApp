import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Button, { ButtonProps } from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  height: 40,
  width: 150,
  backgroundColor: "#2C2A4A",
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateForm = () => {
  // alert customizations

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // set input
  const [textInput, setTextInput] = useState({
    title: "",
    desc: "",
  });

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Box>
        <form>
          <TextField
            name="title"
            type={"text"}
            sx={{ display: "flex" }}
            // sx={{ width: 600 }}
            value={textInput.title}
            id="outlined-basic"
            label="Title"
            margin="normal"
            variant="outlined"
            onChange={handleTextInputChange}
          />

          <TextField
            name="desc"
            type={"text"}
            // sx={{ width: 600 }}
            sx={{ display: "flex" }}
            value={textInput.desc}
            id="outlined-basic"
            label="Blog Content"
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            onChange={handleTextInputChange}
          />

          {/* <div style={{ marginTop: "50px" }}>
            <input
              type="file"
              name="thumImg"
              accept="image/*"
              //   onChange={onImageChange}
            ></input>
          </div> */}

          {/* Upload image and submit button  */}
          <Box sx={{ height: 20 }}></Box>

          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
            <Typography sx={{ marginLeft: 2 }}>Select Image</Typography>
          </IconButton>
          <Box sx={{ height: 50 }}></Box>
          <Box sx={{ textAlign: "center" }}>
            <ColorButton variant="contained" onClick={handleClick}>
              Upload Blog
              <input hidden accept="image/*" multiple type="file" />
            </ColorButton>
            <Snackbar
              open={open}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Blog Uploaded Successfully!
              </Alert>
            </Snackbar>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default CreateForm;
