import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageRender from "./PageRender";
import PrimarySearchAppBar from "./components/global/header";
import Container from "@mui/material/Container";
// import BlogsPage from "./features/blogs/BlogsPage";
import { useAppDispatch, useAppSelector } from "./store/store";
import SingleBlogPage from "./features/blogs/SingleBlogPage";
import CreateBlogPage from "./features/blogs/CreateBlogPage";
import EditBlogPage from "./features/blogs/EditBlogPage";
import LoginPage from "./features/account/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthGuard from "./components/guards/AuthGuard";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./components/theme/theme";
// import { getCurrentUser } from "./store/auth/actions";
// import { GET_CURRENT_USER } from "./store/auth/actionTypes";

function App() {
  const dispatch = useAppDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const { isLoggedIn } = useAppSelector((state) => state.auth);

  if (!isLoggedIn) {
    console.log("Haaaaa");
  }

  const initApp = useCallback(async () => {
    // await dispatch(getBlogs());
    // dispatch(getCurrentUser());
    // console.log("Current user jj: ", getCurrentUser);
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
                element={
                  isLoggedIn ? <CreateBlogPage /> : <Navigate to="/login" />
                }
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
