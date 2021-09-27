import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
let REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
class JeweleryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  addToCardHandler = async (user) => {
    const reqBody = {
      userEmail: user.email,
      imagePath: this.props.jewelweyItem.image,
      title: this.props.jewelweyItem.title,
      description: this.props.jewelweyItem.description,
      price: this.props.jewelweyItem.price,
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
    const handleToggle = async () => {
      this.setState({ isActive: !this.state.isActive });
      const reqBody = {
        userEmail: user.email,
        imagePath: this.props.jewelweyItem.image,
        title: this.props.jewelweyItem.title,
        description: this.props.jewelweyItem.description,
        price: this.props.jewelweyItem.price,
      };
      const Data = await axios.post(
        `${REACT_APP_BACKEND_URL}/addtofav`,
        reqBody
      );
      console.log(Data.data, "done");
    }
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
              <div className='row'>
                <Button
                  variant="primary"
                  onClick={(e) => this.addToCardHandler(user)}
                  className='col'
                >
                  Add to Cart
                </Button>
                <div class="buttons col" >
                  <span className={this.state.isActive ? "like-btn  is-active" : "like-btn"} onClick={handleToggle} ></span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default withAuth0(JeweleryCard);
