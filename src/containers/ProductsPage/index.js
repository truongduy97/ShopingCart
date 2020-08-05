import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Box, Button } from "@material-ui/core";
import { Product } from "../../components";
import Pagination from "@material-ui/lab/Pagination";
const classStyles = theme => ({
  root: {
    backgroundColor: "#ffee33"
  },
  mr_auto: {
    padding: "50px 300px"
  }
});
class ProductsPage extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "San pham 1",
        price: 8,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/109500068-577268219626559-1781650017500384436-n.jpg?v=1595330535000"
      },
      {
        id: 2,
        name: "San pham 2",
        price: 14,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/116100253-3074838829218714-9073977565740696242-n.jpg?v=1595853770000"
      },
      {
        id: 3,
        name: "San pham 3",
        price: 12,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/115970004-306626407415264-5450619111238994772-n.jpg?v=1595330591000"
      },
      {
        id: 4,
        name: "San pham 4",
        price: 9,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/115844444-311743083208439-6108934669943805257-n.jpg?v=1595330674000"
      },
      {
        id: 5,
        name: "San pham 5",
        price: 7,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/107394521-891501798012798-6859051419782666584-n.jpg?v=1594299802000"
      },
      {
        id: 6,
        name: "San pham 6",
        price: 16,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/104817516-364749494503525-1760230804520186332-n.jpg?v=1592645712000"
      },
      {
        id: 7,
        name: "San pham 7",
        price: 6,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/103957565-1335841653287136-5873768723851042006-n.jpg?v=1592646841000"
      },
      {
        id: 8,
        name: "San pham 8",
        price: 9,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/103633647-258970922092631-8333007350843346544-n.jpg?v=1592646908000"
      },
      {
        id: 9,
        name: "San pham 9",
        price: 14,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/103111965-3014350392006455-7615889219971405861-o.jpg?v=1591880466000"
      },
      {
        id: 10,
        name: "San pham 10",
        price: 10,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/103182439-3014350118673149-1711782372942160465-o.jpg?v=1591871126000"
      },
      {
        id: 11,
        name: "San pham 11",
        price: 2,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/103409197-3014349912006503-997740576332549729-o.jpg?v=1591871173000"
      },
      {
        id: 12,
        name: "San pham 12",
        price: 15,
        img:
          "https://bizweb.dktcdn.net/thumb/large/100/331/067/products/116100253-3074838829218714-9073977565740696242-n.jpg?v=1595853770000"
      }
    ]
  };
  render() {
    return (
      <Container>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              2
            </Grid>
            <Grid item xs={12} md={10}>
              <Grid container spacing={2}>
                {this.state.products.map((product, index) => {
                  return (
                    // <Grid item md={3} xs={6} key={index}>
                    <Product
                      name={product.name}
                      price={product.price}
                      img={product.img}
                    ></Product>
                    // </Grid>
                  );
                })}
              </Grid>

              <Pagination
                className={this.props.classes.mr_auto}
                count={10}
                color="secondary"
              />
            </Grid>
          </Grid>
        </Box>
        <Button className={this.props.classes.root}>
          test style class components withStyle
        </Button>
      </Container>
    );
  }
}

export default withStyles(classStyles)(ProductsPage);
