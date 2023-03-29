import {
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";
import React from "react";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore The World!
      </Typography>

      <Box marginTop={3} sx={{ display: "flex" }}>
        {/* <img src={tourimg} alt="tour_page_img" width={500} height={300}></img> */}
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>

        <Typography variant="caption" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </Box>

      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
      </Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        {/* <BottomNavigation showLabels>
          <BasicModal />
        </BottomNavigation> */}
      </Paper>
    </Container>
  );
};

export default Tour;
