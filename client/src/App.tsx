import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrimarySearchAppBar from './components/global/header';
import Container from '@mui/material/Container';
// import BlogsPage from "./features/blogs/BlogsPage";
import { useAppDispatch } from './store/store';
import SingleBlogPage from './features/blogs/SingleBlogPage';
import CreateBlogPage from './features/blogs/CreateBlogPage';
import EditBlogPage from './features/blogs/EditBlogPage';
import LoginPage from './features/account/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthGuard from './components/guards/AuthGuard';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from './components/theme/theme';
import BlogsPage from './features/blogs/BlogsPage';
import { getBlogsRequest } from './store/blog/actions';
import { getCurrentUser } from './store/auth/actions';

function App() {
  const dispatch = useAppDispatch();
  const [darkMode, setDarkMode] = useState(false);

  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  const token = localStorage.getItem('jwt-blogapp');
  console.log('TOOK2', token);
  const initApp = useCallback(async () => {
    await dispatch(getBlogsRequest());
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  });

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
                path="/"
                element={
                  token ? <Navigate to="home" /> : <Navigate to="login" />
                }
              />
              <Route
                path="/home"
                element={token ? <BlogsPage /> : <Navigate to="../login" />}
              />
              <Route
                path="/login"
                element={token ? <Navigate to="/home" /> : <LoginPage />}
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
