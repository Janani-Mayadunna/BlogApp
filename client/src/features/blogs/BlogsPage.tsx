import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { textAlign } from "@mui/system";
import { Link, Navigate } from "react-router-dom";
import CarouselF from "../../components/global/Carousel";
import FloatingActionButtons from "../../components/global/FloatingActionButtons";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../store/auth/actions";

export default function BlogPage() {
  const { blogs } = useAppSelector((state) => state.blogs);

  const dispatch = useAppDispatch();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    const token = localStorage.getItem("jwt-blogapp");
    if (token) {
      dispatch(getCurrentUser());
    }
  }, []);

  return (
    <div>
      <Box sx={{ paddingBottom: 5 }}>
        <CarouselF />
      </Box>

      <Grid container spacing={2}>
        {blogs &&
          blogs.map((blog) => (
            <Grid item key={blog._id} xs={4}>
              <Link to={`/blog/${blog._id}`} style={{ textDecoration: "none" }}>
                <Paper elevation={5}>
                  {/* Box has paddingX and paddingY */}
                  {/* Box is a container for components just like a div */}
                  <Box padding={1}>
                    <Typography
                      variant="body2"
                      component="h2"
                      sx={{
                        textAlign: "center",
                        fontWeight: "bolder",
                        fontSize: 16.5,
                      }}
                    >
                      {blog.title}
                      {/*Tour name */}
                    </Typography>
                  </Box>

                  <img className="img" src={blog.image} alt="card_image" />
                </Paper>
              </Link>
            </Grid>
          ))}
      </Grid>

      <Box position={"absolute"} right={100}>
        <FloatingActionButtons />
      </Box>
      <Box sx={{ height: 100 }}></Box>
    </div>
  );
}
