import React from "react";
import { Typography, TextField, Grid, Box, Button } from "@material-ui/core";

const ProductCart = props => {
  const { img, name, price, quantity, size, id } = props.products;

  return (
    <div>
      <Box boxShadow={2} mb={3}>
        <Grid container>
          <Grid item md={4}>
            <img style={{ maxWidth: "100%" }} src={img}></img>
          </Grid>
          <Grid item md={8}>
            <Box p={7}>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="body1">Size: {size}</Typography>
              <Typography variant="body2">Price: {price}$</Typography>
              <TextField type="number" value={quantity}></TextField>
              <Box my={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => props.removeFromCart(id)}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductCart;
