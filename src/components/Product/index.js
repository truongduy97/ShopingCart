import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  Button,
  Typography,
  CardActions,
  Box
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  margin_auto: {
    margin: "auto"
  }
}));
function Product({ id, price, name, img, addToCart }) {
  const classes = useStyles();
  const handleClickAddToCart = () => {
    addToCart({
      id,
      price,
      name,
      img,
      size: "L",
      quantity: 1
    });
  };
  return (
    // <Grid item md={3} xs={6}>
    <Card>
      <CardActionArea>
        <Box>
          <img src={img} style={{ maxWidth: "100%" }}></img>
        </Box>
      </CardActionArea>
      <Box>
        <Typography align="center" variant="h6">
          {/* {props.name} */}
          <Link to={"/product/" + id}>{name}</Link>
        </Typography>
        <Typography align="center" variant="h6">
          {price}$
        </Typography>
        <CardActions>
          <Button
            className={classes.margin_auto}
            size="small"
            color="primary"
            variant="contained"
            onClick={handleClickAddToCart}
          >
            Add
          </Button>
        </CardActions>
      </Box>
    </Card>
    // </Grid>
  );
}

export default Product;
