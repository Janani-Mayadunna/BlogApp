import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRender from "./PageRender";
import PrimarySearchAppBar from "./components/global/header";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container sx={{ marginY: 5, marginTop: 0 }}>
          <PrimarySearchAppBar />

          <Routes>
            <Route path="/" Component={PageRender} />
            <Route path="/:page" Component={PageRender} />
            <Route path="/:page/:slug" Component={PageRender} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
