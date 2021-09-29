import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ShopingCard from "./Component/ShopingCard";
import FavList from "./Component/FavList";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Component/card.css";

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardList: [
				{
					title: "LapTop Lenove",
					quantity: 3,
					description: "asdasd",
					imagePath: "https://www.bootstrapcdn.com/assets/img/bannerImage.png",
					price: 280,
				},
				{
					title: "LapTop Lenove",
					quantity: 3,
					description: "asdasd",
					imagePath: "https://www.bootstrapcdn.com/assets/img/bannerImage.png",
					price: 280,
				},
				{
					title: "LapTop Lenove",
					quantity: 3,
					description: "asdasd",
					imagePath: "https://www.bootstrapcdn.com/assets/img/bannerImage.png",
					price: 280,
				},
				{
					title: "LapTop Lenove",
					quantity: 3,
					description: "asdasd",
					imagePath: "https://www.bootstrapcdn.com/assets/img/bannerImage.png",
					price: 280,
				},
			],
			favList: [],
		};
	}
	delFromCard = (itemId) => {
		axios
			.delete(`${REACT_APP_BACKEND_URL}/delfromcard/${itemId}`)
			.then((res) => {
				this.getCart();
			})
			.catch((error) => alert(error));
	};

	getCart = () => {
		const { user } = this.props.auth0;
		axios.get(`${REACT_APP_BACKEND_URL}/getCart?email=${user.email}`).then(
			(res) => {
				this.setState({ cardList: res.data });
			},
			() => {
				console.log(this.state.cardList);
			}
		);
	};
	getFav = () => {
		const { user } = this.props.auth0;
		axios.get(`${REACT_APP_BACKEND_URL}/getCartFav?email=${user.email}`).then(
			(res) => {
				this.setState({ favList: res.data });
			},
			() => {
				console.log(this.state.cardList);
			}
		);
	};
	componentDidMount = async () => {
		this.getCart();
		this.getFav();
	};
	render() {
		let total = 0;
		const { user, isAuthenticated } = this.props.auth0;
		return (
			<div className="profile Cart-container">
				<div className="wrapper wrapper-content animated fadeInRight">
					<div className="row">
						<div className="col-md-9">
							<div className="ibox">
								<div className="ibox-title">
									<h5>Items in your cart</h5>
								</div>

								{this.state.cardList.map((item) => {
									return (
										(total = total + Number(item.price)),
										(<ShopingCard item={item} delFromCard={this.delFromCard} />)
									);
								})}

								<div className="ibox-content">
									<Link to="/Checkout">
										<button className="btn btn-primary pull-right">
											<i className="fa fa fa-shopping-cart"></i> Checkout
										</button>
									</Link>
									<Link to="/">
										<button className="btn btn-white">
											<i className="fa fa-arrow-left"></i> Continue shopping
										</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="card">
								<div className="card-body">
									<div className="d-flex flex-column align-items-center text-center">
										<img
											src="https://bootdey.com/img/Content/avatar/avatar7.png"
											alt="Admin"
											class="rounded-circle"
											width="150"
										/>
										<div className="mt-3">
											<h4>{user.name}</h4>
											<p className="text-secondary mb-1">{user.email}</p>
											<p className="text-muted font-size-sm">
												{" "}
												@{user.nickname}
											</p>
											{/*<button class="btn btn-primary"></button>
                                            <button class="btn btn-outline-primary">Message</button>*/}
										</div>
									</div>
								</div>
							</div>
							<div className="ibox">
								<div className="ibox-title">
									<h5>Cart Summary</h5>
								</div>
								<div className="ibox-content">
									<span>Total</span>
									<h2 className="font-bold">{total}</h2>

									<hr />
									<span className="span text-muted small">
										* sales tax will be applied
									</span>
									<div className="m-t-sm">
										<div className="btn-group">
											<Link to="/Checkout">
												<a
													href="#"
													className="checkout-btn btn btn-primary btn-sm"
												>
													<i className="fa fa-shopping-cart"></i> Checkout
												</a>
											</Link>
											{/* <a href="#" className="btn btn-white btn-sm"> Cancel</a>*/}
										</div>
									</div>
								</div>
							</div>

							<div className="ibox">
								<div className="ibox-title">
									<h5>Support</h5>
								</div>
								<div className="ibox-content text-center">
									<h3>
										<i className="fa fa-phone"></i> +(962)555522200
									</h3>
									<span className="small">
										Please contact with us if you have any questions. We are
										avalible 24h.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withAuth0(Profile);
