import React from "react";
import { ShoppingCart } from "@material-ui/icons/";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Badge
} from "@material-ui/core/";
function Header(props) {
  return (
    <div>
      <AppBar position="static" className="nav">
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
