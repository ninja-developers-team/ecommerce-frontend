import React, { Component } from 'react'
import MenCard from '../card/MenCard'
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class MenClothing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menCollection : [],

            showModel: false,
        } }
    componentDidMount=()=>{
        axios.get(`https://fakestoreapi.com/products/category/men's clothing`).then(res=>{this.setState({menCollection:res.data})})
    }
selectedValue=(e)=>{
    let value =  Number(e.target.value)
let menCollection=this.state.menCollection
     this.state.menCollection.sort((a,b) =>{
        if(value===2){
         
         return Number(b.price) - Number(a.price);
         
    }else if (value===1){
        return  Number(a.price) - Number(b.price)
    }else{
        return  this.state.menCollection
    }
    
    })
    this.setState({
        menCollection:menCollection
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
            {this.state.menCollection.map((menItem) => (
                    <Grid key={menItem.id} item xs={12} sm={6} md={4} lg={3}>
                       <MenCard menItem={menItem}/>
                    </Grid>
                ))}
            </Grid>
        </main>
        </div>
    }
}
export default MenClothing