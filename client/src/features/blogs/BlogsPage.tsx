import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CarouselF from "../../components/global/Carousel";
import { useAppSelector } from "../../store/store";

export default function BlogPage() {
  const { blogs } = useAppSelector((state) => state.blogs);

  return (
    <div>
      <Box sx={{ paddingBottom: 5 }}>
        <CarouselF />
      </Box>

      <Grid container spacing={2}>
        {blogs &&
          blogs.map((blog) => (
            <Grid item xs={4}>
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
                    {/* Tour name */}
                  </Typography>
                </Box>

                <img className="img" src={blog.image} alt="card_image" />
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
