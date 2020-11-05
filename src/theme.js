import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3996E3",
      light: "#3996E3",
      dark: "#3996E3",
    },
    secondary: {
      main: "#2DC3AA",
      light: "#2DC3AA",
      dark: "#2DC3AA",
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: "#282c34",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: 0,
        margin: 0,
        backgroundColor: "#fff", // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: "5px",
      },
    },
  },
});
export default theme;
