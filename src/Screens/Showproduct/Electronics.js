import React, { Component } from 'react'
import ElectronicsCard from '../card/ElectronicsCard'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

class Electronics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            electronicsList : [],

            showModel: false,
        } }

        componentDidMount=()=>{
            axios.get(`https://fakestoreapi.com/products/category/electronics`).then(res=>{this.setState({electronicsList:res.data})})
        console.log(this.state.electronicsList ,'axios')
        }      
 selectedValue=(e)=>{
    let value =  Number(e.target.value)
let electronicsList=this.state.electronicsList
     this.state.electronicsList.sort((a,b) =>{
        if(value===2){
         
         return Number(b.price) - Number(a.price);
         
    }else if (value===1){
        return  Number(a.price) - Number(b.price)
    }else{
        return  this.state.electronicsList
    }
    
    })
    this.setState({
        electronicsList:electronicsList
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
            {this.state.electronicsList.map((electronicsItem) => (
                    <Grid key={electronicsItem.id} item xs={12} sm={6} md={4} lg={3}>
                       <ElectronicsCard electronicsItem={electronicsItem}/>
                    </Grid>
                ))}
            </Grid>
        </main>
        </div>
    }
}
export default Electronics