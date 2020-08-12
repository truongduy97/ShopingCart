import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Box,
  Button,
  CircularProgress
} from "@material-ui/core";
import { Product } from "../../components";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
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
    // products: []
    page: 1,
    limit: 4
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios
      .get("http://localhost:3004/products", {
        params: {
          _page: this.state.page,
          _limit: this.state.limit
        }
      })
      .then(res => {
        this.setState({
          products: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleChangePage = (event, page) => {
    this.setState(
      {
        products: undefined,
        page
      },
      () => {
        this.getProducts();
      }
    );
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
                {this.state.products ? (
                  this.state.products.map((product, index) => {
                    return (
                      <Grid item md={3} xs={6} key={index}>
                        <Product
                          name={product.name}
                          price={product.price}
                          img={product.img}
                          id={product.id}
                        ></Product>
                      </Grid>
                    );
                  })
                ) : (
                  <CircularProgress color="secondary" />
                )}
              </Grid>

              <Pagination
                className={this.props.classes.mr_auto}
                count={10}
                color="secondary"
                page={this.state.page}
                onChange={this.handleChangePage}
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
