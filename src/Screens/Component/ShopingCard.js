import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";
export class ShopingCard extends Component {
  render() {
    return (
      <div class="item">
        <div class="buttons">
          <span
            class="delete-btn"
            onClick={() => {
              this.props.delFromCard(this.props.item._id);
            }}
          ></span>
        </div>
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
        <div class="total-price">{this.props.item.quantity}</div>
        <div class="buttons">
          <AiFillDelete
            onClick={() => {
              this.props.delFromCard(this.props.item._id);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    );
  }
}
export default ShopingCard;
