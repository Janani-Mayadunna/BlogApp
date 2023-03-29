import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardHoriz from "../components/blog/CardHoriz";
import CreateForm from "../components/blog/CreateForm";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { textAlign } from "@mui/system";

const CreateBlog = () => {
  const initState = {
    user: "",
    title: "",
    content: "",
    description: "",
    thumbnail: "",
    category: "",
    createdAt: new Date().toISOString(),
  };

  const [blog, setBlog] = useState(initState);

  // const { auth, categories} = useSelector((state:RootStore) => state)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Create Your Blog
      </h2>
      <Grid container spacing={10} paddingRight={10}>
        <Grid item xs={8}>
          <CreateForm />
        </Grid>
        <Grid item xs={4}>
          <CardHoriz />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateBlog;
