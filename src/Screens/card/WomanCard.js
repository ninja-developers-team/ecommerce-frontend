import React, { Component } from "react";

import { Card, Button, Col } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
let REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
class WomanCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      Q: 1,
    };
  }
  incrementQty = () => {
    this.setState({
      Q: this.state.Q + 1,
    });
  };
  decrementQty = () => {
    this.state.Q > 0
      ? this.setState({
        Q: this.state.Q - 1,
      })
      : this.setState({
        Q: 0,
      });
  };
  addToCardHandler = async (user) => {
    const reqBody = {
      userEmail: user.email,
      imagePath: this.props.womanItem.image,
      title: this.props.womanItem.title,
      description: this.props.womanItem.description,
      price: this.props.womanItem.price,
      quantity: this.state.Q, ///from input
    };
    const productData = await axios.post(
      `${REACT_APP_BACKEND_URL}/addtocard`,
      reqBody
    );
    console.log(productData, "done");
  };
  render() {
    const { user } = this.props.auth0;
    const handleToggle = async () => {
      this.setState({ isActive: !this.state.isActive });

      ///////////////// add to fav


      const reqBody = {
        userEmail: user.email,
        imagePath: this.props.womanItem.image,
        title: this.props.womanItem.title,
        description: this.props.womanItem.description,
        price: this.props.womanItem.price,
      };
      const Data = await axios.post(
        `${REACT_APP_BACKEND_URL}/addtofav`,
        reqBody
      );
      console.log(Data.data, "done");
    };
    return (
      <Col lg={3} md={4} sm={6} xs={12}>
        <figure class="snip1171">
          <img src={this.props.womanItem.image} alt="sample71" />
          <div class="price"> {this.props.womanItem.price}</div>
          <div class="">
            <span
              className={
                this.state.isActive ? "like-btn  is-active" : "like-btn"
              }
              onClick={handleToggle}
            ></span>
          </div>
          <figcaption>
            <h6>{this.props.womanItem.title.replace(/[0-9]/g, "")}</h6>
            <p> {this.props.womanItem.description}</p>
            <div class="qty-block">
              <div class="qty">
                <input
                  type="text"
                  name="qty"
                  maxlength="12"
                  value={this.state.Q}
                  title=""
                  class="input-text"
                />
                <div class="qty_inc_dec">
                  <i class="increment" onClick={() => this.incrementQty()}>
                    +
                  </i>
                  <i class="decrement" onClick={() => this.decrementQty()}>
                    -
                  </i>
                </div>
              </div>
            </div>
            <a onClick={(e) => this.addToCardHandler(user)}>Add to Cart</a>
          </figcaption>
        </figure>
      </Col>
    );
  }
}
export default withAuth0(WomanCard);
