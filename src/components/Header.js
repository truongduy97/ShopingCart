import React from "react";
import { ShoppingCart } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Badge
} from "@material-ui/core/";
const useStyles = makeStyles(theme => ({
  bg_color: {
    backgroundColor: theme.palette.theme_color_one.main
  },
  color: "white"
}));
function Header(props) {
  const classes = useStyles();
  return (
    <div>
      {/* <AppBar position="static" className={classes.bg_color classes.color}> them nhieu class*/}
      <AppBar position="static" className={classes.bg_color}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Shopping Cart
          </Typography>
          <Box ml="auto">
            <Button>Home</Button>
            <Button>Products</Button>
            <Button>Cart</Button>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;