import React, { Component } from "react";
import { Typography, TextField, Grid } from "@material-ui/core";

class ProductCart extends Component {
  state = {};

  render() {
    return (
      <Grid container>
        <Grid item md={4}>
          <img
            style={{ maxWidth: "100%" }}
            src="https://bizweb.dktcdn.net/thumb/large/100/331/067/products/103111965-3014350392006455-7615889219971405861-o.jpg?v=1591880466000"
          ></img>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h5">Title: x 5</Typography>
          <Typography variant="body1">Size: L </Typography>
          <Typography variant="body2">20$</Typography>
          <TextField type="number"></TextField>
        </Grid>
      </Grid>
    );
  }
}

export default ProductCart;
