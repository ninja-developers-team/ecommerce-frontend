import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

export class GameSingleProduct extends Component {
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
  render() {
    const handleToggle = async () => {
      this.setState({ isActive: !this.state.isActive });
    };
    let obj = this.props.obj;
    const { user } = this.props.auth0;

    const reqBody = {
      userEmail: user.email,
      imagePath: obj.image,
      title: obj.title,
      description: obj.description,
      price: obj.price,
      quantity: this.state.Q, ///from input
    };
    return (
      <Col lg={3} md={6} sm={6} xs={12}>
        <figure class="snip1171">
          <img src={obj.image} alt="sample71" />
          <div class="price"> {obj.price}</div>
          <div class="buttons col">
            <span
              className={
                this.state.isActive ? "like-btn  is-active" : "like-btn"
              }
              onClick={handleToggle}
            ></span>
          </div>
          <figcaption>
            <h6>{obj.title.replace(/[0-9]/g, "")}</h6>
            <p>{obj.description}</p>
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
            <a
              class="button-game"
              onClick={() => this.props.addFavouriteGame(reqBody)}
            >
              Add to Cart
            </a>
          </figcaption>
        </figure>
      </Col>
    );
  }
}

export default withAuth0(GameSingleProduct);
