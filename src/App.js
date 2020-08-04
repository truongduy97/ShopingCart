import React from "react";
import ShoppingCart from "./components/ShoppingCart";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const theme = createMuiTheme({
  palette: {
    theme_color_one: {
      light: "#5c6bc0",
      main: "#303f9f",
      dark: "#1a237e"
    },
    theme_color_two: {
      light: "#f4ff81",
      main: "#c6ff00",
      dark: "#aeea00"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ShoppingCart></ShoppingCart>
      </div>
    </ThemeProvider>
  );
}

export default App;
