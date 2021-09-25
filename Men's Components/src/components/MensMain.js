import React, { Component } from "react";
import Electrice from "./Mens";
import axios from "axios";

export class MensMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elProducts: [],
      carts: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => {
        console.log(res.data);
        this.setState({
          elProducts: res.data,
        });
        console.log(this.state.elProducts);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3000/CartItems")
      .then((res) => {
        console.log(res.data, "DATABASE DATA");
        this.setState({
          carts: res.data,
        });
        console.log(this.state.elProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Electrice elProducts={this.state.elProducts} />
      </div>
    );
  }
}

export default MensMain;
