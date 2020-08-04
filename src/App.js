import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProductsPage } from "./containers";
import { Header } from "./components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8e44ad"
    }
  },
  typography: {
    body2: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#f1c40f"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <ProductsPage></ProductsPage>
      </div>
    </ThemeProvider>
  );
}

export default App;
