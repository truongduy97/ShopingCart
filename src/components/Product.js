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
const useStyles = makeStyles(theme => ({
  margin_auto: {
    margin: "auto"
  }
}));
function Product(props) {
  const classes = useStyles();
  return (
    <Grid item md={3}>
      <Card>
        <CardActionArea>
          <Box>
            <img src={props.img} style={{ maxWidth: "100%" }}></img>
          </Box>
        </CardActionArea>
        <Box>
          <Typography align="center" variant="h6">
            {props.name}
          </Typography>
          <Typography align="center" variant="h6">
            {props.price}$
          </Typography>
          <CardActions>
            <Button
              className={classes.margin_auto}
              size="small"
              color="primary"
              variant="contained"
            >
              Add
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
}

export default Product;