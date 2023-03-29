import React from "react";

import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import cat from "../../styles/cat.jpg";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { createTheme } from "@mui/material/styles";
import { fontWeight } from "@mui/system";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: "2rem",
            // backgroundColor: "blue",
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 36,
            // backgroundColor: "blue",
          },
        },
      ],
    },
  },
});

const BlogCard = ({ blog }: any) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
                {blog.name}
                {/* Tour name */}
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center" }}
                marginTop={2}
                marginBottom={3}
                justifyContent="center"
              >
                <Rating
                  name="read-only"
                  //   value={4}
                  value={blog.rating}
                  precision={0.5}
                  size={"small"}
                  readOnly
                />
              </Box>
            </Box>

            {/* <img className="img" src={cat} alt="card_image" /> */}
            <img className="img" src={blog.image} alt="card_image" />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogCard;
