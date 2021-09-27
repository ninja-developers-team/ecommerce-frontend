import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import { withAuth0 } from "@auth0/auth0-react";
export class GameApiData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		};
	}

	render() {
		// const { user } = this.props.auth0;
		const handleToggle = async () => {
			this.setState({ isActive: !this.state.isActive });
		};
		return this.props.gameApiData.map((obj, idx) => {
			// const reqBody = {
			// 	userEmail: user.email,
			// 	imagePath: obj.thumb,
			// 	title: obj.title,
			// 	description: "no description to desplay",
			// 	price: obj.salePrice,
			// 	quantity: 5, ///from input
			// };
			return (
				<>
					<Col lg={3} md={6} sm={6} xs={12}>
						<figure class="snip1171">
							<img src={obj.image} alt="sample71" />
							<div class="price"> {obj.price}</div>
							<figcaption>
								<h6>{obj.title}</h6>
								<p>
									{obj.description}
									<div class="buttons col">
										<span
											className={
												this.state.isActive ? "like-btn  is-active" : "like-btn"
											}
											onClick={handleToggle}
										></span>
									</div>
								</p>
								<a
									href="#"
									onClick={() => {
										// this.props.addFavouriteGame(reqBody);
									}}
								>
									Add to Cart
								</a>
							</figcaption>
						</figure>
						{/* <Card className="card-game" style={{ width: "18rem" }}>
							<Card.Img variant="top" src={obj.thumb} />
							<Card.Body>
								<Card.Title>{obj.title}</Card.Title>
								<Card.Text>
									Normal Price: {obj.normalPrice}
									<BiDollar />
								</Card.Text>
								<Card.Text>
									Sale Price: {obj.salePrice}
									<BiDollar />
									<AiFillFire style={{ color: "red", fontSize: "20px" }} />
								</Card.Text>

								<Card.Text>
									Rating: {obj.dealRating}: <BsFillStarFill />
								</Card.Text>

								<Button
									variant="primary"
									onClick={(e) => this.props.addFavouriteGame(reqBody)}
								>
									Add to Cart
								</Button>
							</Card.Body>
						</Card> */}
					</Col>
				</>
			);
		});
	}
}

export default withAuth0(GameApiData);
