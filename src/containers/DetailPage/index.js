import React, { Component } from "react";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Input
} from "@material-ui/core";
import axios from "axios";
import { withStyles } from "@material-ui/core";
import { ImageContainer } from "../../components";

const style = theme => ({
  img_container: {
    boxShadow: theme.shadows[3]
  },
  big_img: {
    minHeight: "300px",
    display: "flex",
    justifyContent: "center"
  },
  small_img: {
    minHeight: "100px",
    width: "100%",
    border: "1px solid black"
  },
  paddingtb: {
    padding: "50px 0"
  },
  paddinglr: {
    padding: "0 100px"
  },
  martb: {
    margin: "20px 0"
  },
  heightBtn: {
    fontSize: "1.4rem"
  }
});

class DetailPage extends Component {
  state = {
    size: "s",
    quantity: 0
  };
  handleChange = event => {
    const form = { ...this.state };
    form[event.target.name] = event.target.value;

    this.setState({
      ...form
    });
  };
  componentDidMount() {
    axios
      .get(`http://localhost:3004/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          product: res.data
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleClickGiam = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };
  handleClickTang = () => {
    this.setState({
      quantity: parseInt(this.state.quantity) + 1
    });
    // if (this.state.quantity >= 0) {
    //   this.setState({
    //     quantity: this.state.quantity + 1
    //   });
    // }
  };

  render() {
    const { classes } = this.props;
    const { product } = this.state;
    return (
      <Container className={classes.paddingtb}>
        <Grid container>
          <Grid item md={4} xs={12} className={classes.img_container}>
            <ImageContainer></ImageContainer>
          </Grid>
          <Grid item md={8} xs={12} className={classes.paddinglr}>
            {/* <Typography variant="h3">{this.props.match.params.id}</Typography> */}
            <Typography variant="h3">Title</Typography>
            <Typography className={classes.martb}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptatem totam ipsam corporis quasi, ipsa hic culpa unde
              necessitatibus doloribus.Labore voluptatem totam ipsam corporis
              quasi, ipsa hic culpa unde necessitatibus doloribus.
            </Typography>
            <Typography variant="h4">20$</Typography>
            <FormControl component="fieldset" className={classes.martb}>
              <FormLabel component="legend">Size:</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="size"
                value={this.state.size}
                onChange={this.handleChange}
              >
                <Box display="flex">
                  <FormControlLabel value="s" control={<Radio />} label="S" />
                  <FormControlLabel value="l" control={<Radio />} label="L" />
                  <FormControlLabel value="xl" control={<Radio />} label="XL" />
                </Box>
              </RadioGroup>
            </FormControl>
            <Box>
              <Button
                className={classes.heightBtn}
                onClick={this.handleClickGiam}
                variant="outlined"
                size="large"
              >
                -
              </Button>
              <TextField
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
                value={this.state.quantity}
                onChange={this.handleChange}
                name="quantity"
              />
              <Button
                className={classes.heightBtn}
                onClick={this.handleClickTang}
                variant="outlined"
                size="large"
              >
                +
              </Button>
            </Box>
            <Box mt={3}>
              <Button variant="contained" color="secondary">
                Add to cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(style)(DetailPage);
