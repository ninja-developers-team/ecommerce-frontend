import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
 import Cart from './Cart';
 import axios from 'axios';
 //import Checkoutitems from './Checkoutitems'
 import Ch from './Ch';


export class Carts extends Component {
    constructor(props){
        super(props);
        this.state={
       
        carts :[],
         
     };
    }
    
    
    onhandelRemove=(product)=>{
        axios.delete(`http://localhost:8000/deleteItemCart/${product._id}`)
        .then(res => {
            console.log(res.data,"DATABASE DATA");


        })
        .catch(err=>{
            console.log(err);
        });

    }
    
    
    
    
    componentDidMount=()=>{
        axios.get('http://localhost:8000/CartItems')
        .then(res => {
            console.log(res.data,"DATABASE DATA");
           this.setState({
            carts:res.data
           })
           console.log(this.state.carts);


        })
        .catch(err=>{
            console.log(err);
        });

    }
    
   
    
    
    
    
    render() {
        return (
            <><main>
                <div />
                <Grid container justify="center" spacing={4}>
                    {this.state.carts.map((product) => (
                        
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Cart product={product} onhandelRemove={this.onhandelRemove} /*onAddToCart={onAddToCart}*/ />
                        </Grid>
                    ))}
                </Grid>
            </main>
            {this.state.carts.map((product) => (
                          <Ch product={product} />
                        
                    ))}
          
            </>
           
                             
                                    
        )
    }
}

export default Carts;
