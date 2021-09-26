import React, { Component } from "react";
import JeweleryCard from "../card/JeweleryCard";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
class Jewelery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jeweleryList: [],
      showModel: false,
    };
  }
  componentDidMount = () => {
    axios
      .get(`https://fakestoreapi.com/products/category/jewelery`)
      .then((res) => {
        this.setState({ jeweleryList: res.data });
      });
  };
  selectedValue = (e) => {
    let value = Number(e.target.value);
    let jeweleryList = this.state.jeweleryList;
    this.state.jeweleryList.sort((a, b) => {
      if (value === 2) {
        return Number(b.price) - Number(a.price);
      } else if (value === 1) {
        return Number(a.price) - Number(b.price);
      } else {
        return this.state.jeweleryList;
      }
    });
    this.setState({
      jeweleryList: jeweleryList,
    });
  };
  render() {
    return (
      <div>
        <form>
          <label for="selectBox">Sort by price</label>
          <select
            class="form-control"
            id="selectBox"
            onClick={this.selectedValue}
          >
            <option value="">select </option>
            <option value="1">from lowest to highest price</option>
            <option value="2">From the highest price to the lowest</option>
          </select>
        </form>
        <Row xs={1} md={3} className="g-4">
          {this.state.jeweleryList.map((jewelweyItem) => (
            <JeweleryCard jewelweyItem={jewelweyItem} />
          ))}
        </Row>
      </div>
    );
  }
}
export default Jewelery;
