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
import LoginPage from "./features/account/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./features/account/accountSlice";
import AuthGuard from "./components/guards/AuthGuard";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getBlogs());
    await dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <PrimarySearchAppBar />
        <Container sx={{ marginY: 5, marginTop: 0 }}>
          <Routes>
            {/* <Route path="/" Component={PageRender} />
            <Route path="/:page" Component={PageRender} />
            <Route path="/:page/:slug" Component={PageRender} /> */}

            <Route path="/" element={<BlogsPage />} />
            <Route path="/blog/:id" element={<SingleBlogPage />} />
            <Route element={<AuthGuard />}>
              <Route path="/createblog" element={<CreateBlogPage />} />
              <Route path="/editblog/:id" element={<EditBlogPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
