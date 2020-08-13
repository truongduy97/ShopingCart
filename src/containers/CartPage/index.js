import React from "react";
import { Grid, Container, Box, Typography, Button } from "@material-ui/core";
// import ProductCart from "../ProductCart";
import { connect } from "react-redux";
function CartPage(props) {
  return (
    <Box py={10}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Box p={2}>
              {/* <ProductCart></ProductCart> */}
              {/* {props.cart.map((product) => {
              return (
                <Box boxShadow={2} mb={2}>
                  <Grid container>
                    <Grid item md={4}>
                      <img style={{ maxWidth: "100%" }} src={product.src} />
                    </Grid>
                    <Grid item md={8}>
                      <Typography variant="h3">{product.title}</Typography>
                      <Typography variant="body2">
                        Mã sản phẩm: {product.id}
                      </Typography>
                      
                      <Typography variant="body2">
                        {product.price}
                        {product.currency}
                      </Typography>
                      <Typography variant="body1">
                        Size: {product.size}
                      </Typography>
                      <TextField value={product.quantity}></TextField>
                    </Grid>
                  </Grid>
                </Box>
              );
            })} */}
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box boxShadow="0 0 25px rgba(0,0,0,0.16)" p={3}>
              <Typography variant="h4">Tổng tiền: 120$</Typography>
              <Box mt={3}>
                <Button variant="contained" color="secondary" fullWidth="true">
                  Thanh Toán
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
export default connect(mapStateToProps)(CartPage);
