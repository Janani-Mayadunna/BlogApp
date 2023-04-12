import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageRender from "./PageRender";
import PrimarySearchAppBar from "./components/global/header";
import Container from "@mui/material/Container";
import BlogsPage from "./features/blogs/BlogsPage";
import { useAppDispatch, useAppSelector } from "./store/store";
import { getBlogs } from "./features/blogs/blogSlice";
import SingleBlogPage from "./features/blogs/SingleBlogPage";
import CreateBlogPage from "./features/blogs/CreateBlogPage";
import EditBlogPage from "./features/blogs/EditBlogPage";
import LoginPage from "./features/account/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./features/account/accountSlice";
import AuthGuard from "./components/guards/AuthGuard";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./components/theme/theme";

function App() {
  const dispatch = useAppDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const { isLoggedIn } = useAppSelector((state) => state.account);

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
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />

          <ToastContainer />

          <PrimarySearchAppBar
            check={darkMode}
            change={() => setDarkMode(!darkMode)}
          />

          <Container sx={{ marginY: 5, marginTop: 0 }}>
            <Routes>
              <Route
                path="/login"
                element={isLoggedIn ? <Navigate to="/" /> : <LoginPage />}
              />
              <Route
                path="/"
                element={isLoggedIn ? <BlogsPage /> : <Navigate to="/login" />}
              />
              <Route path="/blog/:id" element={<SingleBlogPage />} />
              <Route element={<AuthGuard />}>
                <Route path="/createblog" element={<CreateBlogPage />} />
                <Route path="/editblog/:id" element={<EditBlogPage />} />
              </Route>
            </Routes>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
