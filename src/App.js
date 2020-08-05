import React from "react";
// import ShoppingCart from "./components/ShoppingCart";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Header, Footer } from "./components";
import ProductsPage from "./conrainers/ProductsPage";
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
        <Header></Header>
        <ProductsPage></ProductsPage>
        <h1>ok2</h1>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
