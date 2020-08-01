import React from "react";
import { Container, Grid } from "@material-ui/core/";
import Product from "./Product";
function ProductList(props) {
  return (
    <div>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item md={2}>
            4
          </Grid>
          <Grid item md={10}>
            <Grid container spacing={5}>
              {props.products.map(product => {
                return (
                  <Product
                    name={product.name}
                    price={product.price}
                    img={product.img}
                    key={product.id}
                  ></Product>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ProductList;
