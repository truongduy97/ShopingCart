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
  FormLabel
} from "@material-ui/core";

import { withStyles } from "@material-ui/core";

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
  }
});

class DetailPage extends Component {
  state = {
    size: "S"
  };
  handleChange = event => {
    this.setState({
      size: event.target.value
    });
  };

  componentDidMount(){
    

  }
  render() {
    const { classes } = this.props;

    return (
      <Container>
        <Grid container>
          <Grid item md={4} className={classes.img_container}>
            <Box className={classes.big_img}>Big img</Box>
            <Box display="flex">
              <Box className={classes.small_img}>Small img</Box>
              <Box className={classes.small_img}>Small img</Box>
              <Box className={classes.small_img}>Small img</Box>
            </Box>
          </Grid>
          <Grid item md={8}>
            <Typography variant="h3">{this.props.match.params.id}</Typography>
            <Typography variant="h4">gia san pham</Typography>

            <FormControl component="fieldset">
              <FormLabel component="legend">Size:</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={this.state.size}
                onChange={this.handleChange}
              >
                <FormControlLabel value="S" control={<Radio />} label="S" />
                <FormControlLabel value="L" control={<Radio />} label="L" />
                <FormControlLabel value="XL" control={<Radio />} label="XL" />
              </RadioGroup>
            </FormControl>
            <Box>
              <TextField type="number"></TextField>
              <Button>Add to cart</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(style)(DetailPage);
