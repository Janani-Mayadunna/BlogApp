import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#907AD6",
    },
    secondary: {
      main: "#37CB2E",
    },
    info: {
      main: "#4F518C",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          // backgroundColor: "#159895",
          backgroundColor: "#907ad6",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          height: 40,
          width: 150,
          ":hover": {
            backgroundColor: "#561167",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          autoHideDuration: 3000,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: "#561167",
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
        },
      },
    },
  },
});
