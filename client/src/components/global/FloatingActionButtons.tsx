import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function FloatingActionButtons() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Link to="/create_blog">
        <Fab color="primary" aria-label="add">
          <Tooltip title="Create Blog" placement="left-start">
            <AddIcon />
          </Tooltip>
        </Fab>
      </Link>
    </Box>
  );
}
