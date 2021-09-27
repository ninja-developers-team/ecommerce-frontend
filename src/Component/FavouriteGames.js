import axios from "axios";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import FavouriteData from "./FavouriteData";
import UpdateFormData from "./UpdateFormData";
export class FavouriteGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: process.env.REAC_APP_SERVER_URL,
      ApiCrudData: [],
      showrudGameData: false,
      showApiMessege: false,
      messege: "",
      count: "",
      normalPrice: "",
      salePrice: "",
      showUpdateForm: false,
      slugName: "",
    };
  }

  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/game/favourite`);
    this.setState({
      ApiCrudData: request.data,
      showrudGameData: true,
    });
  };

  removeFavouriteGame = async (slug) => {
    const deleteRequest = await axios.delete(
      `http://localhost:8080/game/favourite/${slug}`
    );
    this.setState({
      ApiCrudData: deleteRequest.data,
      showrudGameData: true,
    });
  };

  showUpdateForm = (count, slug) => {
    this.setState({
      count: count,
      slugName: slug,
      showUpdateForm: true,
    });
  };

  updateCountItem = (e) =>
    this.setState({
      count: e.target.value,
    });

  updateCount = async (e) => {
    e.preventDefault();
    const request = axios.put(
      `http://localhost:8080/game/favourite/${this.state.slugName}`,
      { count: this.state.count }
    );
    this.setState({
      ApiCrudData: request.data,
      showrudGameData: true,
    });
  };
  render() {
    return (
      <>
        <Row>
          {this.state.showApiMessege && <h3>{this.state.messege}</h3>}
          {this.state.showUpdateForm && (
            <UpdateFormData
              updateCount={this.updateCount}
              updateCountItem={this.updateCountItem}
              count={this.state.count}
            />
          )}
          {this.state.showrudGameData && (
            <FavouriteData
              ApiCrudData={this.state.ApiCrudData}
              removeFavouriteGame={this.removeFavouriteGame}
              slug={this.slug}
              showUpdateForm={this.showUpdateForm}
            />
          )}
        </Row>
      </>
    );
  }
}

export default FavouriteGames;
