import React from "react";
import { ShoppingCart } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
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
    backgroundColor: theme.palette.theme_color_two.main
  },
  color: "white"
}));
function Header(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.bg_color}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Shopping Cart
          </Typography>
          <Box ml="auto">
            <Button>
              <NavLink exact to="/">
                Home
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/product">Products</NavLink>
            </Button>
            <Button>
              <NavLink to="/detail">Cart</NavLink>
            </Button>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Badge badgeContent={4} color="Secondary">
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
