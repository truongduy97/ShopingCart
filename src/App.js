import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Header, Footer } from "./components";
import { ProductsPage, HomePage, DetailPage } from "./containers";
import { Route, Switch } from "react-router-dom";
// import { Switch } from "@material-ui/core";
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
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/product/:id" component={DetailPage}>
            {/* <DetailPage></DetailPage> */}
          </Route>
          <Route path="/product">
            <ProductsPage></ProductsPage>
          </Route>

          <Route path="/detail" component={DetailPage}></Route>
          <Route>404 page</Route>
        </Switch>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
