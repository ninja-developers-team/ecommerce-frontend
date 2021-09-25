import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
 import Cart from './Cart';

export class Carts extends Component {
    render() {
        return (

            <main >
                <div />
                <Grid container justify="center" spacing={4}>
                    {this.props.carts.map((product) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Cart product={product} /*onAddToCart={onAddToCart}*/ />
                        </Grid>
                    ))}
                </Grid>
            </main>
            // <Product Products={this.props.elProducts}/>

        )
    }
}

export default Carts
