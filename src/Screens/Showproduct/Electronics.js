import React, { Component } from "react";
import ElectronicsCard from "../card/ElectronicsCard";
import axios from "axios";
import { Row } from "react-bootstrap";
class Electronics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electronicsList: [],
      showModel: false,
    };
  }
  componentDidMount = () => {
    axios
      .get(`https://asac-ecommerce-api.herokuapp.com/children`)
      .then((res) => {
        this.setState({
          electronicsList: res.data.data.children,
          electronicsList2: res.data.data.children,
        });
      });
    console.log(this.state.electronicsList, "from kjj");
  };
  selectedValue = (e) => {
    let value = Number(e.target.value);
    let electronicsList = this.state.electronicsList;
    this.state.electronicsList.sort((a, b) => {
      if (value === 2) {
        return Number(b.price) - Number(a.price);
      } else if (value === 1) {
        return Number(a.price) - Number(b.price);
      } else {
        return this.state.electronicsList;
      }
    });
    this.setState({
      electronicsList: electronicsList,
    });
  };
  selectType = (event) => {
    let type = event.target.value.toLowerCase();
    console.log(type);
    if (type) {
      let filterdData = this.state.electronicsList2.filter((card) => {
        return card.title.toLowerCase().includes(type);
      });
      this.setState({
        electronicsList: filterdData,
      });
      console.log(this.state.electronicsList);
    }
    if (type === "all") {
      this.setState({
        electronicsList: this.state.electronicsList2,
      });
    }
  };
  render() {
    return (
      <div>
        <form>
          <select
            class="form-control"
            onChange={this.selectType}
            placeholder="Filter Your Item"
          >
            <option value="all">Filter Your Item On Categories </option>
            <option value="Dresses">Dresses</option>
            <option value="SLEEPWEAR">Slepwear</option>
            <option value="SHIRT">shirt</option>
            <option value="SPORTS">Sports</option>
          </select>
          {/* <label for="selectBox">Sort by price</label> */}
          <select
            class="form-control"
            id="selectBox"
            onClick={this.selectedValue}
            placeholder="Filter Your Item"
          >
            <option value="">Filter Your Item</option>
            <option value="1">from lowest to highest price</option>
            <option value="2">From the highest price to the lowest</option>
          </select>
        </form>
        <Row xs={1} md={3} className="g-4">
          {this.state.electronicsList.map((electronicsItem) => (
            <ElectronicsCard electronicsItem={electronicsItem} />
          ))}
        </Row>
      </div>
    );
  }
}
export default Electronics;
