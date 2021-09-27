import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
let REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
class ElectronicsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  addToCardHandler = async (user) => {
    const reqBody = {
      userEmail: user.email,
      imagePath: this.props.electronicsItem.image,
      title: this.props.electronicsItem.title,
      description: this.props.electronicsItem.description,
      price: this.props.electronicsItem.price,
      quantity: 5,
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
      const reqBody = {
        userEmail: user.email,
        imagePath: this.props.electronicsItem.image,
        title: this.props.electronicsItem.title,
        description: this.props.electronicsItem.description,
        price: this.props.electronicsItem.price,
      };
      const Data = await axios.post(
        `${REACT_APP_BACKEND_URL}/addtofav`,
        reqBody
      );
      console.log(Data.data, "done");
    };
    return (
      <>
        <Col lg={3} md={4} sm={6} xs={12}>
          <figure class="snip1171">
            <img src={this.props.electronicsItem.image} alt="sample71" />
            <div class="price">{this.props.electronicsItem.price}</div>
            <figcaption>
              <h6>{this.props.electronicsItem.title.replace(/[0-9]/g, "")}</h6>
              <p>
                {this.props.electronicsItem.description}

                <div class="buttons col">
                  <span
                    className={
                      this.state.isActive ? "like-btn  is-active" : "like-btn"
                    }
                    onClick={handleToggle}
                  ></span>
                </div>
              </p>
              <a href="#" onClick={(e) => this.addToCardHandler(user)}>
                Add to Cart
              </a>
            </figcaption>
          </figure>
        </Col>
      </>
    );
  }
}
export default withAuth0(ElectronicsCard);
