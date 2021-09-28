import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
let REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
class JeweleryCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
			Q: 1
		};
	}
	incrementQty = () => {
		this.setState({
			Q: this.state.Q + 1
		})
	}
	decrementQty = () => {
		this.state.Q > 0 ?
			this.setState({
				Q: this.state.Q - 1
			}) :
			this.setState({
				Q: 0
			})
	}
	addToCardHandler = async (user) => {
		const reqBody = {
			userEmail: user.email,
			imagePath: this.props.jewelweyItem.image,
			title: this.props.jewelweyItem.title,
			description: this.props.jewelweyItem.description,
			price: this.props.jewelweyItem.price,
			quantity: this.state.Q,
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
		};
		return (
			<>
				<Col lg={3} md={4} sm={6} xs={12}>
					<figure class="snip1171">
						<img src={this.props.jewelweyItem.image} alt="sample71" />
						<div class="price">{this.props.jewelweyItem.price}</div>
						<figcaption>
							<h6>{this.props.jewelweyItem.title}</h6>
							<p>
								{this.props.jewelweyItem.description}
								<div class="buttons col">
									<span
										className={
											this.state.isActive ? "like-btn  is-active" : "like-btn"
										}
										onClick={handleToggle}
									></span>
								</div>
							</p>
							<div class="qty-block">
								<div class="qty">
									<input type="text" name="qty" maxlength="12" value={this.state.Q} title="" class="input-text" />
									<div class="qty_inc_dec">
										<i class="increment" onClick={() => this.incrementQty()}>+</i>
										<i class="decrement" onClick={() => this.decrementQty()}>-</i>
									</div>
								</div>
							</div>

							<a href="#" onClick={(e) => this.addToCardHandler(user)}>
								Add to Cart
							</a>
						</figcaption>
					</figure>
					{/* <Card style={{ width: "18rem" }}>
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
              </p>
              <a href="#" onClick={(e) => this.addToCardHandler(user)}>
                Add to Cart
              </a>
            </figcaption>
          </figure>
          */}
        </Col>
      </>
    );
  }
}
export default withAuth0(JeweleryCard);
