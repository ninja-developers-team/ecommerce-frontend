import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export class FavList extends Component {

  del = async () => {
    const reqBody = {
      userEmail: this.props.user.email,
      imagePath: this.props.item.image,
      title: this.props.item.title,
      description: this.props.item.description,
      price: this.props.item.price,
    };
    const Data = await axios.post(
      `${REACT_APP_BACKEND_URL}/addtofav`,
      reqBody
    );
  }
  render() {

    return (
      <div class="item">
        <div class="image">
          <img
            src={this.props.item.imagePath}
            alt=""
            style={{ height: "70px" }}
          />
        </div>
        <div class="description">
          <span>{this.props.item.title}</span>
        </div>
        <div class="total-price">{this.props.item.price}</div>
        <div class="buttons">
          <AiFillDelete
            onClick={() => {
              this.del();
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    );
  }
}
export default FavList;
