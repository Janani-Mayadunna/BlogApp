import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getBlogByIdRequest } from "../../store/blog/actions";

export default function SingleBlogPage() {
  const dispatch = useAppDispatch();
  const { singleBlog } = useAppSelector((state) => state.blogs);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      alert("Null ID");
      return;
    }
    dispatch(getBlogByIdRequest(id));
  }, []);

  return (
    <Box>
      <Box sx={{ paddingBottom: 5 }}>
        <Typography variant="h4">{singleBlog?.title}</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingBottom={5}
      >
        <img
          style={{ height: 300, width: "90%" }}
          src={singleBlog?.image}
          alt="blog_image"
        />
      </Box>
      <Box>
        <Typography variant="body1">{singleBlog?.content}</Typography>
      </Box>

      <Box padding={5}>
        <Link
          style={{ textDecoration: "none" }}
          to={`/editblog/${singleBlog?._id}`}
        >
          <Button
            color="info"
            variant="contained"
            disableElevation
            style={{ width: 5 }}
          >
            Edit
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
