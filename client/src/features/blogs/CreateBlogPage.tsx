import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React, { MouseEvent, useState } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { purple } from "@mui/material/colors";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppDispatch } from "../../store/store";
import { createBlog } from "./blogSlice";
import { Link, useNavigate } from "react-router-dom";

export default function CreateBlogPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  /* STATES OF BLOG */
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let data = {
      title: blog.title,
      content: blog.content,
      image: blog.image,
    };
    dispatch(createBlog(data));
    setBlog({
      title: "",
      content: "",
      image: "",
    });
    navigate("/");
  };

  /* STYLINGS */

  //Button stylings
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    height: 40,
    width: 150,
    backgroundColor: "#2C2A4A",
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  //Alert stylings

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  //Snackbar state
  const [open, setOpen] = useState(false);

  //handlers of snackbar
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

  /* STYLINGS */

  return (
    <Box>
      <Box sx={{ paddingBottom: 5 }}>
        <Typography variant="h4">Create new blog</Typography>
      </Box>

      <Box sx={{ marginBottom: 10, marginLeft: 20, marginRight: 20 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              value={blog.title}
              fullWidth
              label="Insert title"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setBlog({ ...blog, content: e.target.value })}
              value={blog.content}
              fullWidth
              label="Insert content"
              rows={5}
              multiline
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setBlog({ ...blog, image: e.target.value })}
              value={blog.image}
              fullWidth
              label="Image URL"
            />
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <ColorButton variant="contained" onClick={handleSubmit}>
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
    </Box>
  );
}
