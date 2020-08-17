import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Header, Footer } from "./components";
import { ProductsPage, HomePage, DetailPage, CartPage } from "./containers";
import { Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { Switch } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    theme_color_one: {
      light: "#6f6f6f",
      main: "#1c1c1c",
      dark: "#141414"
    },
    theme_color_two: {
      light: "#f4ff81",
      main: "#c6ff00",
      dark: "#aeea00"
    }
  }
});

const initState = {
  cart: [
    {
      id: 4,
      name: "San pham 4",
      price: 9,
      size: ["s", "m", "xl"],
      img:
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/115844444-311743083208439-6108934669943805257-n.jpg?v=1595330674000"
    },
    {
      id: 5,
      name: "San pham 5",
      price: 7,
      size: ["s", "l", "xl"],
      img:
        "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/107394521-891501798012798-6859051419782666584-n.jpg?v=1594299802000"
    }
  ]
};
const reducer = function(state = initState, action) {
  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
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
            <Route path="/cart" component={CartPage}></Route>
            <Route path="/detail" component={DetailPage}></Route>
            <Route>404 page</Route>
          </Switch>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
