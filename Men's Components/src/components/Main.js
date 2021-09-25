import React, { Component } from "react";
import Electrice from "./Electrice";
import axios from "axios";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elProducts: [],
      carts: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
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
      .get("http://localhost:8000/CartItems")
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

export default Main;
