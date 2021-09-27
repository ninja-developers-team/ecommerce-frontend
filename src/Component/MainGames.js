import React, { Component } from "react";
import axios from "axios";
import GameApiData from "./GameApiData";
import { Row } from "react-bootstrap";
export class MainGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REACT_APP_BACKEND_URL,
      gameApiData1: [],
      showGameData: false,
      showApiMessege: false,
      messege: "",
    };
  }

  componentDidMount = async () => {
    axios.get(`https://asac-ecommerce-api.herokuapp.com/game`).then(
      (res) => {
        console.log(this.state.gameApiData1.data, "from did amunt");
        this.setState({
          gameApiData1: res.data.data.game,
          showGameData: true,
        });
        console.log(this.state.gameApiData1.data, "from did amunt");
      },
      () => {
        console.log(this.state.gameApiData1.data);
      }
    );
  };

  addFavouriteGame = async (object) => {
    const postRequest = await axios.post(`${this.state.url}/addtocard`, object);
    console.log(object);
  };

  selectedValue = (e) => {
    let value = Number(e.target.value);
    let gameApiData1 = this.state.gameApiData1;
    this.state.gameApiData1.sort((a, b) => {
      if (value === 2) {
        return Number(b.price) - Number(a.price);
      } else if (value === 1) {
        return Number(a.price) - Number(b.price);
      } else {
        return this.state.womanCollection;
      }
    });
    this.setState({
      gameApiData1: gameApiData1,
    });
  };

  render() {
    return (
      <>
        <form>
          <select
            class="form-control"
            id="selectBox"
            onClick={this.selectedValue}
            placeholder="Filter Your Item"
          >
            <option value="">Filter Your Item </option>
            <option value="1">from lowest to highest price</option>
            <option value="2">From the highest price to the lowest</option>
          </select>
        </form>
        <Row>
          {this.state.showApiMessege && <h3>{this.state.messege}</h3>}
          {this.state.showGameData && (
            <GameApiData
              gameApiData={this.state.gameApiData1}
              addFavouriteGame={this.addFavouriteGame}
            />
          )}
        </Row>
      </>
    );
  }
}

export default MainGames;
