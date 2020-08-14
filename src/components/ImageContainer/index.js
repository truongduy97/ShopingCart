import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& img": {
      maxWidth: "100%"
    }
  },
  bigImg: {},
  smallImg: {}
});

function ImageContainer(props) {
  const classes = useStyles();
  return (
    <Box boxShadow={1} borderRadius="5px" className={classes.root}>
      <Box border={1} mb={1}>
        <img src={props.imgs} />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Box border={1}>
            <img src="https://bizweb.dktcdn.net/thumb/large/100/331/067/products/115844444-311743083208439-6108934669943805257-n.jpg?v=1595330674000" />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box border={1}>
            <img src="https://bizweb.dktcdn.net/thumb/large/100/331/067/products/115844444-311743083208439-6108934669943805257-n.jpg?v=1595330674000" />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box border={1}>
            <img src="https://bizweb.dktcdn.net/thumb/large/100/331/067/products/115844444-311743083208439-6108934669943805257-n.jpg?v=1595330674000" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ImageContainer;
