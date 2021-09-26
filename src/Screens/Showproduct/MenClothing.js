import React, { Component } from "react";
import MenCard from "../card/MenCard";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
class MenClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menCollection: [],
      showModel: false,
    };
  }
  componentDidMount = () => {
    axios
      .get(`https://fakestoreapi.com/products/category/men's clothing`)
      .then((res) => {
        this.setState({ menCollection: res.data });
      });
  };
  selectedValue = (e) => {
    let value = Number(e.target.value);
    let menCollection = this.state.menCollection;
    this.state.menCollection.sort((a, b) => {
      if (value === 2) {
        return Number(b.price) - Number(a.price);
      } else if (value === 1) {
        return Number(a.price) - Number(b.price);
      } else {
        return this.state.menCollection;
      }
    });
    this.setState({
      menCollection: menCollection,
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
          {this.state.menCollection.map((menItem) => (
            <MenCard menItem={menItem} />
          ))}
        </Row>
      </div>
    );
  }
}
export default MenClothing;
