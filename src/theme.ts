import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    h1: {
      fontFamily: "IBM Plex Mono",
      fontSize: "48px",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "IBM Plex Mono",
      fontSize: "40px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "IBM Plex Mono",
      fontSize: "20px",
      fontWeight: "bold",
    },
    h5: {
      fontFamily: "IBM Plex Mono",
      fontSize: "18px",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 400
    },
    subtitle1: {
      fontSize: "16px",
      color: "#A1A1A1",
      fontWeight: 300,
    },
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        sx: {
          padding: 0
        }
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        sx: {
          color: "#333333", // Icon color
        },
      },
    },
  },
});

export default theme