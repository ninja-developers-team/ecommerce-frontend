import React, { Component } from 'react'
import JeweleryCard from '../card/JeweleryCard'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class Jewelery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jeweleryList : [],

            showModel: false,
        } }
    componentDidMount=()=>{
        axios.get(`https://fakestoreapi.com/products/category/jewelery`).then(res=>{this.setState({jeweleryList:res.data})})
      }
selectedValue=(e)=>{
    let value =  Number(e.target.value)
let jeweleryList=this.state.jeweleryList
     this.state.jeweleryList.sort((a,b) =>{
        if(value===2){
         
         return Number(b.price) - Number(a.price);
         
    }else if (value===1){
        return  Number(a.price) - Number(b.price)
    }else{
        return  this.state.jeweleryList
    }
    
    })
    this.setState({
        jeweleryList:jeweleryList
    })
}
    render() {
  return <div>
              <form>
                        <label for="selectBox">Sort by price</label>
                        <select class="form-control" id="selectBox"  onClick={this.selectedValue}>
                            <option value='' >select </option>
                            <option value="1">from lowest to highest price</option>
                            <option value="2" >From the highest price to the lowest</option>
                        </select>
                </form>
                <main >
            <div />
            <Grid container justify="center" spacing={4}>
            {this.state.jeweleryList.map((jewelweyItem) => (
                    <Grid key={jewelweyItem.id} item xs={12} sm={6} md={4} lg={3}>
                       <JeweleryCard jewelweyItem={jewelweyItem}/>
                    </Grid>
                ))}
            </Grid>
        </main>
        </div>
    }
}
export default Jewelery