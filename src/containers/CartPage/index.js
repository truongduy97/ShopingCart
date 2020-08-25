import React from "react";
import { Grid, Container, Box, Typography, Button } from "@material-ui/core";
import ProductCart from "../ProductCart";
import { connect } from "react-redux";
import { removeFromCartAction } from "../../actions";
function CartPage(props) {
  const total = props.cart.reduce((total, pic) => {
    return (total = total + pic.quantity * pic.price);
  }, 0);

  return (
    <Box py={10}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Box p={2}>
              {props.cart.map(product => {
                return (
                  <ProductCart
                    key={product.id}
                    products={product}
                    removeFromCart={props.removeFromCart}
                  ></ProductCart>
                );
              })}
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box boxShadow="0 0 25px rgba(0,0,0,0.16)" p={3}>
              <Typography variant="h4">Tổng tiền: {total}$</Typography>
              <Box mt={3}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth="true"
                  // onClick={handleOpen}
                >
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
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => {
      dispatch(removeFromCartAction(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
