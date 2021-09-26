import React, { Component } from 'react'
//import Electrice from './Electrice';
import axios from 'axios';
import Carts from './cart/Carts'


export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
        elProducts :[],
        UserEmail:''
         };
    }


    addToCart = async (productObj)=>{
       
       // send the whole object to the backend 
        await axios.post('http://localhost:8000/add-to-cart', productObj) 
        .catch(err=>{
            console.log(err);
        });
         
         
    }


            
    
    componentDidMount=()=>{
        axios.get('https://fakestoreapi.com/products/category/electronics')
        .then(res => {
            console.log(res.data);
           this.setState({
            elProducts:res.data
           })
           console.log(this.state.elProducts);


        })
        .catch(err=>{
            console.log(err);
        });

    }
    render() {



        

        return (
            <div>
               {/* <Electrice  elProducts={this.state.elProducts} addToCart={this.addToCart}/>*/}
               
                <Carts />
              
                
               
                
            </div>
        )
    }
}

export default Main

