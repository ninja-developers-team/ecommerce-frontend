import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
export class GameApiData extends Component {
	render() {
		return this.props.gameApiData.map((obj, idx) => {
			return (
				<>
					<Col lg={4} md={6} sm={6} xs={12}>
						<Card className="card-game" style={{ width: "18rem" }}>
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
								{/* <form>
									<input type="hidden" value={obj.title} />
									<input type="hidden" value={obj.title} />
									<input type="hidden" value={obj.title} />
									<input type="hidden" value={obj.title} />
									<input type="hidden" value={obj.title} />
								</form> */}
								<Button
									variant="primary"
									onClick={(e) => this.props.addFavouriteGame(obj)}
								>
									Add to Cart
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</>
			);
		});
	}
}

export default GameApiData;
