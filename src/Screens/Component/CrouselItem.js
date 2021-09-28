import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export class CrouselItem extends Component {
	render() {
		const items = this.props.jeweleryItem;
		return (
			<div className="col d-block">
				<Link to={`${this.props.path}`} className="nav-link">
					<Carousel
						className="carousel-product"
						fade
						nextIcon=""
						nextLabel=""
						prevIcon=""
						prevLabel=""
					>
						{items.map((jel) => {
							return (
								<Carousel.Item>
									<Image
										src={jel.image || jel.thumb}
										alt=""
										style={{
											objectFit: "contain",
											height: "100%",
											width: "100%",
										}}
									/>
								</Carousel.Item>
							);
						})}
					</Carousel>
					<h5
						className=" title-carousel col"
						style={{ textAlign: "center", margin: "20px 0" }}
					>
						{" "}
						{this.props.category}{" "}
					</h5>
				</Link>
			</div>
		);
	}
}
export default CrouselItem;
