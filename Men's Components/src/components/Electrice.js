import React, { Component } from "react";
import Product from "./Product/product";
import Grid from "@material-ui/core/Grid";

export class Electrice extends Component {
  render() {
    return (
      <main>
        <div />
        <Grid container justify="center" spacing={4}>
          {this.props.elProducts.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} /*onAddToCart={onAddToCart}*/ />
            </Grid>
          ))}
        </Grid>
      </main>
      // <Product Products={this.props.elProducts}/>
    );
  }
}

export default Electrice;
