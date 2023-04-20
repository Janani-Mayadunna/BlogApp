import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React, { MouseEvent, useState, useEffect } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { purple } from "@mui/material/colors";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteBlogRequest,
  getBlogByIdRequest,
  updateBlogRequest,
} from "../../store/blog/actions";
import { Blog } from "../../interfaces/Blog";

export default function EditBlogPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { singleBlog } = useAppSelector((state) => state.blogs);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(getBlogByIdRequest(id));
  }, []);

  useEffect(() => {
    setBlog({
      title: singleBlog?.title,
      content: singleBlog?.content,
      image: singleBlog?.image,
    });
  }, [singleBlog]);

  /* STATES OF BLOG */
  const [blog, setBlog] = useState({
    title: singleBlog?.title,
    content: singleBlog?.content,
    image: singleBlog?.image,
  });

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleClick();

    let data: Blog = {
      title: blog.title ? blog.title : "",
      content: blog.content ? blog.content : "",
      image: blog.image ? blog.image : "",
    };

    if (!id) return;
    dispatch(updateBlogRequest(id, data));
    navigate("/");
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    if (!id) return;
    dispatch(deleteBlogRequest(id));
    navigate("/");
  };

  /* STYLINGS */

  //Button stylings
  const ColorButtonUpdate = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#280B7C",
  }));

  const ColorButtonDelete = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#CA3A1B",
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
        <Typography variant="h4">Update blog - {blog.title}</Typography>
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

      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <ColorButtonUpdate variant="contained" onClick={handleSubmit}>
              Update Blog
            </ColorButtonUpdate>
            <Snackbar open={open} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Blog Updated Successfully!
              </Alert>
            </Snackbar>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <ColorButtonDelete variant="contained" onClick={handleDelete}>
              Delete Blog
            </ColorButtonDelete>
            <Snackbar open={open} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Blog Updated Successfully!
              </Alert>
            </Snackbar>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
