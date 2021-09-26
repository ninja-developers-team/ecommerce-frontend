import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
let REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

class JeweleryCard extends Component {
  addToCardHandler = async (user) => {
    const reqBody = {
      userEmail: user.email,
      imagePath: this.props.electronicsItem.image,
      title: this.props.electronicsItem.title,
      description: this.props.electronicsItem.description,
      price: this.props.electronicsItem.price,
      quantity: 5, ///from input
    };
    const productData = await axios.post(
      `${REACT_APP_BACKEND_URL}/addtocard`,
      reqBody
    );
    console.log(productData, "done");
  };
  addToCardHandler = async (user) => {
    const reqBody = {
      userEmail: user.email,
      imagePath: this.props.electronicsItem.image,
      title: this.props.electronicsItem.title,
      description: this.props.electronicsItem.description,
      price: this.props.electronicsItem.price,
      quantity: 5, ///from input
    };
    const productData = await axios.post(
      `${REACT_APP_BACKEND_URL}/addtocard`,
      reqBody
    );
    console.log(productData, "done");
  };
  render() {
    const { user } = this.props.auth0;

    return (
      <>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.jewelweyItem.image} />
            <Card.Body>
              <Card.Title>{this.props.jewelweyItem.title}</Card.Title>
              <Card.Text>
                Price: {this.props.jewelweyItem.price}
                <BiDollar />
              </Card.Text>
              <Card.Text>
                description: {this.props.jewelweyItem.description}
                <BiDollar />
                <AiFillFire style={{ color: "red", fontSize: "20px" }} />
              </Card.Text>

              <Card.Text>
                Rating: {this.props.jewelweyItem.rating.rate} <BsFillStarFill />
              </Card.Text>
              <Button
                variant="primary"
                onClick={(e) => this.addToCardHandler(user)}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default withAuth0(JeweleryCard);
