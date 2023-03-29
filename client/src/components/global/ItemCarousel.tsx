import { Paper, Button } from "@mui/material";

function Item({ item }: any) {
  return (
    // <Paper>
    <img
      src={item.image}
      style={{ width: "100%", height: "55vh", borderRadius: "2rem" }}
    ></img>
    // </Paper>
  );
}

export default Item;
