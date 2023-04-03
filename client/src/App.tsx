import React, { useCallback, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRender from "./PageRender";
import PrimarySearchAppBar from "./components/global/header";
import Container from "@mui/material/Container";
import BlogsPage from "./features/blogs/BlogsPage";
import { useAppDispatch } from "./store/store";
import { getBlogs } from "./features/blogs/blogSlice";
import SingleBlogPage from "./features/blogs/SingleBlogPage";
import CreateBlogPage from "./features/blogs/CreateBlogPage";
import EditBlogPage from "./features/blogs/EditBlogPage";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getBlogs());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Container sx={{ marginY: 5, marginTop: 0 }}>
          <Routes>
            {/* <Route path="/" Component={PageRender} />
            <Route path="/:page" Component={PageRender} />
            <Route path="/:page/:slug" Component={PageRender} /> */}

            <Route path="/" element={<BlogsPage />} />
            <Route path="/blog/:id" element={<SingleBlogPage />} />
            <Route path="/createblog" element={<CreateBlogPage />} />
            <Route path="/editblog/:id" element={<EditBlogPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
