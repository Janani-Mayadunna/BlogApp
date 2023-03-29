import React from "react";
import App from "../App";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import blogCats from "./data.json";
import cover from "../styles/cover.jpg";
import blogCover from "../images/cover2.jpg";
import CarouselF from "../components/global/Carousel";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FloatingActionButtons from "../components/global/FloatingActionButtons";
import { width } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <div>
      {/* <h2>Home Page</h2> */}

      <Box>
        {/* <img className="imgCover" src={blogCover} alt="card_image" /> */}
        <CarouselF />
      </Box>

      <Box position={"absolute"} right={100}>
        <FloatingActionButtons />
      </Box>
      <Box sx={{ height: 100 }}></Box>
    </div>
  );
};

export default Home;
