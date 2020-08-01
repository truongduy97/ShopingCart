import React from "react";
import "./App.css";
import {
  Container,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  btn_auto: {
    margin: "auto"
  }
});
// Navbar ( Search,Home,Products,Cart - icon(so luong san pham trong gio hang))
// All product
//  - Product
//    - Hinh anh
//    - Ten
//    - Gia
// Filter
// Phan trang (pagination)
// Footer
const data = [
  {
    name: "Product 0",
    price: 2,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/o1cn01axehyi2bctizb9jle-361068359.jpg?v=1594537019000",
    currency: "$"
  },
  {
    name: "Product 1",
    price: 19,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/109500068-577268219626559-1781650017500384436-n.jpg?v=1595330535000",
    currency: "$"
  },
  {
    name: "Product 2",
    price: 7,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/116100253-3074838829218714-9073977565740696242-n.jpg?v=1595853770000",
    currency: "$"
  },
  {
    name: "Product 3",
    price: 9,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/115970004-306626407415264-5450619111238994772-n.jpg?v=1595330591000",
    currency: "$"
  },
  {
    name: "Product 4",
    price: 6,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/116016354-870874213422060-5862370013506413485-n.jpg?v=1595330614000",
    currency: "$"
  },
  {
    name: "Product 5",
    price: 16,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/115844444-311743083208439-6108934669943805257-n.jpg?v=1595330674000",
    currency: "$"
  },
  {
    name: "Product 6",
    price: 14,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/106898123-617933248828634-1459477789127921432-n.jpg?v=1594299899000",
    currency: "$"
  },
  {
    name: "Product 7",
    price: 2,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/106802323-522173951810207-5608440616358559873-n.jpg?v=1594299834000",
    currency: "$"
  },
  {
    name: "Product 8",
    price: 1,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/0260050001832.jpg?v=1593156315000",
    currency: "$"
  },
  {
    name: "Product 9",
    price: 17,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/107039201-2747379688871432-2548597016112627833-n.jpg?v=1594299780000",
    currency: "$"
  },
  {
    name: "Product 10",
    price: 8,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/107394521-891501798012798-6859051419782666584-n.jpg?v=1594299802000",
    currency: "$"
  },
  {
    name: "Product 11",
    price: 3,
    src:
      "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/104817516-364749494503525-1760230804520186332-n.jpg?v=1592645712000",
    currency: "$"
  }
];
function App() {
  const classes = useStyle();

  return (
    <div className="App">
      <h1>App Start</h1>
    </div>
  );
}

export default App;
