import { Box } from "@mui/system";
import React, { useState } from "react";

const SearchIn = () => {
  const [search, setSearch] = useState("");

  // const handleChange = (e) => {
  //     setSearch(e.target.value);
  // };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
};

export default SearchIn;
