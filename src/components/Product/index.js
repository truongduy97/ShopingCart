import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => {
  return {
    root: {
      maxWidth: 345,
      "& img": {
        transition: "all 0.3s"
      },
      "&:hover": {
        "& img": {
          transform: "translate(-50% , 0)"
        }
      }
    },
    media: {
      height: 140
    }
  };
});

export default function Product({ price, name, src, currency }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={src} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name || "Product name"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price || 5}
            {currency}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          fullWidth={true}
          variant="contained"
          color="primary"
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
