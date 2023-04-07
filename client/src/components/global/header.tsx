import * as React from "react";
import { styled, alpha, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { logOutUser } from "../../features/account/accountSlice";
import { Button } from "@mui/material";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const bfLoginLinks = [
  { label: "Login", path: "/login" },

  // {isLoggedIn ? ( label: "Login", path: "/login" ) : ( label: "Register", path: "/register" )}
  // { label: "Register", path: "/register" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  // marginLeft: 300,
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar({
  change,
  check,
}: {
  change: any;
  check: any;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Typography
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            "& a": {
              textDecoration: "none",
              color: "inherit",
              "&:hover": {
                textDecoration: "none",
                color: "inherit",
              },
            },
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/createblog">
            Create Blog
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Switch
          {...label}
          defaultChecked
          color="default"
          onChange={change}
          checked={check}
        />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      <MenuItem>
        <Typography
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            "& a": {
              textDecoration: "none",
              color: "inherit",
              "&:hover": {
                textDecoration: "none",
                color: "inherit",
              },
            },
          }}
        >
          <Link style={{ textDecoration: "none" }} to="#">
            Create Blog
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography
          noWrap
          component="div"
          sx={{
            display: { xs: "none", sm: "block" },
            "& a": {
              textDecoration: "none",
              color: "inherit",
              "&:hover": {
                textDecoration: "none",
                color: "inherit",
              },
            },
          }}
        >
          <Link style={{ textDecoration: "none" }} to="#">
            Log out
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Switch
          {...label}
          defaultChecked
          color="default"
          onChange={change}
          checked={check}
        />
      </MenuItem>
    </Menu>
  );

  const { isLoggedIn } = useAppSelector((state) => state.account);

  const dispatch = useAppDispatch();

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
      {/* <ThemeProvider theme={headerTheme}> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              "& a": {
                fontSize: "1.7rem",
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  textDecoration: "none",
                  color: "inherit",
                },
              },
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Blog Space
            </Link>
          </Typography>

          {isLoggedIn ? (
            <Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
          ) : (
            ""
          )}
          <Box sx={{ flexGrow: 1 }} />

          <MenuItem>
            {isLoggedIn ? (
              <Typography
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  "& a": {
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                      textDecoration: "none",
                      color: "inherit",
                    },
                  },
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/login"}
                  onClick={() => dispatch(logOutUser())}
                >
                  Log out
                  {/* <Button onClick={() => dispatch(logOutUser())}></Button> */}
                </Link>
              </Typography>
            ) : (
              <Typography
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  "& a": {
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                      textDecoration: "none",
                      color: "inherit",
                    },
                  },
                }}
              >
                <Link style={{ textDecoration: "none" }} to={"/login"}>
                  Login
                </Link>
              </Typography>
            )}
            {/* <ul>
                {bfLoginLinks.map((link, index) => (
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "block" },
                      "& a": {
                        fontSize: "1.3rem",
                        textDecoration: "none",

                        color: "#2C2A4A",
                        fontWeight: "bold",
                        "&:hover": {
                          textDecoration: "none",
                          color: "inherit",
                        },
                      },
                    }}
                  >
                    <li key={index} className="nav-item">
                      <Link key={link.path} className="nav-link" to={link.path}>
                        {link.label}
                      </Link>
                    </li>
                  </Typography>
                ))}
              </ul> */}
          </MenuItem>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <MenuItem>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </MenuItem>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* </ThemeProvider> */}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
