import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
  Box
} from "@material-ui/core";

function Product(props) {
  return (
    <Grid item md={3}>
      <Card>
        <CardActionArea>
          <Box>
            <img src={props.img} style={{ maxWidth: "100%" }}></img>
          </Box>
        </CardActionArea>
        <Typography variant="h6">{props.name}</Typography>
        <Typography variant="h6">{props.price}$</Typography>
        <CardActions>
          <Button size="small" color="secondary" variant="contained">
            Add
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Product;
