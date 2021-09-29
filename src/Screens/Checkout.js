import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			cartList: [],
			totlaWithdiscount: 0,
			showDiscount: false,
			disconutNum: 0,
		};
	}

	componentDidMount() {
		const { user } = this.props.auth0;

		// get all the countries using Countries and cities Api
		axios
			.get("https://countriesnow.space/api/v0.1/countries")
			.then((res) => {
				console.log(res.data.data);

				this.setState({
					countries: res.data.data,
				});

				console.log(this.state.countries);
			})
			.catch((err) => {
				console.log(err);
			});

		//git User cartList form the checkout
		axios.get(`${REACT_APP_BACKEND_URL}/getCart?email=${user.email}`).then(
			(res) => {
				console.log(res.data, "asdasdasds");
				this.setState({
					cartList: res.data,
				});
			},
			() => {
				console.log(this.state.cartList);
			}
		);
	}

	handleDiscount = (e) => {
		e.preventDefault();
		let discountCode = e.target.discount.value;
		console.log(discountCode);

		let totlaWithdiscount = 1;

		let total = 0;
		this.state.cartList.forEach((item) => {
			total = total + Number(item.price);
		});

		if (discountCode === "*") {
			let discountNum = 25 / 100;

			totlaWithdiscount = total - total * discountNum;
			console.log(totlaWithdiscount, "total amount after discount");

			this.setState({
				totlaWithdiscount: totlaWithdiscount,
				showDiscount: true,
				disconutNum: 25,
			});
			console.log(this.state.disconutNum, "your discount");
		} else if (discountCode === "**") {
			let discountNum = 50 / 100;

			totlaWithdiscount = total - total * discountNum;
			console.log(totlaWithdiscount, "total amount after discount");

			this.setState({
				totlaWithdiscount: totlaWithdiscount,
				showDiscount: true,
				disconutNum: 50,
			});
		} else if (discountCode === "***") {
			let discountNum = 75 / 100;

			totlaWithdiscount = total - total * discountNum;
			console.log(totlaWithdiscount, "total amount after discount");

			this.setState({
				totlaWithdiscount: totlaWithdiscount,
				showDiscount: true,
				disconutNum: 75,
			});
		} else {
			return;
		}
	};

	// Calculate discont
	/* calculateDiscount=(discount => {
      let totlaWithdiscount = 1;
      let  discountNum = discount / 100;
      
      let total = 0
      this.state.cartList.forEach(item => {
          total = total + Number(item.price);
      });
      console.log(total, "total amount");
      
      totlaWithdiscount = total - (total * discountNum);
      console.log(totlaWithdiscount, "total amount after discount");
  
      this.setState({
          totlaWithdiscount: totlaWithdiscount,
          showDiscount: true
      })
     
  }) ;*/

	render() {
		let total = 0;
		return (
			<div>
				<div className="container">
					<div className="containerCheckout">
						<div className="py-5 text-center">
							<h2>Checkout </h2>
						</div>
						<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
							<h5 className="my-0 mr-md-auto font-weight-normal"></h5>
						</div>
						<div className="row">
							<div className="total col-md-4 order-md-2 mb-4">
								<h4 className="d-flex justify-content-between align-items-center mb-3">
									<span className="text-muted">Your cart</span>
									<span className="badge badge-secondary badge-pill">3</span>
								</h4>
								<ul className=" list-group mb-3">
									{this.state.cartList.map((item) => {
										return (
											(total = total + Number(item.price)),
											(
												<li className="list-group-item d-flex justify-content-between lh-condensed">
													<div>
														<h6 className="my-0">{item.title}</h6>
														<small className="text-muted">
															{item.quantity}
														</small>
													</div>
													<span className="text-muted">$ {item.price}</span>
												</li>
											)
										);
									})}
									<li className="list-group-item d-flex justify-content-between">
										<span>Total (USD)</span>
										<strong>${total}</strong>
									</li>
								</ul>
								<form
									id="checkoutform"
									className="card p-2"
									onSubmit={this.handleDiscount}
								>
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											placeholder="Promo code"
											name="discount"
										/>
										<div className="input-group-append">
											<button type="submit" className="btn btn-secondary">
												Redeem
											</button>
										</div>
									</div>
									{this.state.showDiscount && (
										<>
											<li className="list-group-item d-flex justify-content-between lh-condensed">
												<div>
													<h6 className="my-0">Your Discount</h6>
												</div>
												<strong>{this.state.disconutNum}%</strong>
											</li>
											<li className="list-group-item d-flex justify-content-between">
												<span>Total (USD)</span>
												<strong>
													<del>${total}</del>
												</strong>
											</li>
											<li className="list-group-item d-flex justify-content-between">
												<span>Total After Discount (USD)</span>
												<strong>${this.state.totlaWithdiscount}</strong>
											</li>
										</>
									)}
								</form>
							</div>
							<div className="col-md-8 order-md-1">
								<h4 className="mb-3">Billing address</h4>
								<form className="needs-validation" novalidate>
									<div className="row">
										<div className="col-md-6 mb-3">
											<label for="firstName">First name</label>
											<input
												type="text"
												className="form-control"
												id="firstName"
												placeholder=""
												value=""
												required
											/>
											<div className="invalid-feedback">
												Valid first name is required.
											</div>
										</div>
										<div className="col-md-6 mb-3">
											<label for="lastName">Last name</label>
											<input
												type="text"
												className="form-control"
												id="lastName"
												placeholder=""
												value=""
												required
											/>
											<div className="invalid-feedback">
												Valid last name is required.
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label for="username">Username</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">@</span>
											</div>
											<input
												type="text"
												className="form-control"
												id="username"
												placeholder="Username"
												required
											/>
											<div className="invalid-feedback">
												Your username is required.
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label for="email">
											Email <span className="text-muted">(Optional)</span>
										</label>
										<input
											type="email"
											className="form-control"
											id="email"
											placeholder="you@example.com"
										/>
										<div className="invalid-feedback">
											Please enter a valid email address for shipping updates.
										</div>
									</div>
									<div className="mb-3">
										<label for="address">Address</label>
										<input
											type="text"
											className="form-control"
											id="address"
											placeholder="1234 Main St"
											required
										/>
										<div className="invalid-feedback">
											Please enter your shipping address.
										</div>
									</div>
									<div className="mb-3">
										<label for="address2">
											Address 2 <span className="text-muted">(Optional)</span>
										</label>
										<input
											type="text"
											className="form-control"
											id="address2"
											placeholder="Apartment or suite"
										/>
									</div>
									<div className="row">
										<div className="col-md-5 mb-3">
											<label for="country">Country</label>
											<select cclassName="form-control" id="country" required>
												<option value="">Choose...</option>
												{this.state.countries.map((country) => {
													return <option>{country.country}</option>;
												})}
											</select>
											<div className="invalid-feedback">
												Please select a valid country.
											</div>
										</div>
										<div className="col-md-3 mb-3">
											<label for="state">state</label>
											<input
												type="text"
												className="form-control"
												id="state"
												placeholder=""
												required
											/>
											<div className="invalid-feedback">
												Please select a valid state
											</div>
										</div>
										<div className="col-md-3 mb-3">
											<label for="zip">Zip</label>
											<input
												type="text"
												className="form-control"
												id="zip"
												placeholder=""
												required
											/>
											<div className="invalid-feedback">Zip code required.</div>
										</div>
									</div>

									<hr className="mb-4" />
									<h4 className="mb-3">Payment</h4>
									<div className="d-block my-3">
										<div className="custom-control custom-radio">
											<input
												id="credit"
												name="paymentMethod"
												type="radio"
												className="custom-control-input"
												checked
												required
											/>
											<label className="custom-control-label" for="credit">
												Credit card
											</label>
										</div>
										<div className="custom-control custom-radio">
											<input
												id="debit"
												name="paymentMethod"
												type="radio"
												className="custom-control-input"
												required
											/>
											<label className="custom-control-label" for="debit">
												Debit card
											</label>
										</div>
										<div className="custom-control custom-radio">
											<input
												id="paypal"
												name="paymentMethod"
												type="radio"
												className="custom-control-input"
												required
											/>
											<label className="custom-control-label" for="paypal">
												Paypal
											</label>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6 mb-3">
											<label for="cc-name">Name on card</label>
											<input
												type="text"
												className="form-control"
												id="cc-name"
												placeholder=""
												required
											/>
											<small className="text-muted">
												Full name as displayed on card
											</small>
											<div className="invalid-feedback">
												Name on card is required
											</div>
										</div>
										<div className="col-md-6 mb-3">
											<label for="cc-number">Credit card number</label>
											<input
												type="text"
												className="form-control"
												id="cc-number"
												placeholder=""
												required
											/>
											<div className="invalid-feedback">
												Credit card number is required
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3 mb-3">
											<label for="cc-expiration">Expiration</label>
											<input
												type="text"
												className="form-control"
												id="cc-expiration"
												placeholder=""
												required
											/>
											<div className="invalid-feedback">
												Expiration date required
											</div>
										</div>
										<div className="col-md-3 mb-3">
											<label for="cc-expiration">CVV</label>
											<input
												type="text"
												className="form-control"
												id="cc-cvv"
												placeholder=""
												required
											/>
											<div className="invalid-feedback">
												Security code required
											</div>
										</div>
									</div>
									<hr className="mb-4" />
									<Link to="/">
										<button
											id="pay-btn"
											className="pay-btn-checkout"
											className="btn btn-primary "
											type="button"
										>
											Pay
										</button>
									</Link>
								</form>
							</div>
						</div>
						<footer className="my-5 pt-5 text-muted text-center text-small"></footer>
					</div>
				</div>
			</div>
		);
	}
}

export default withAuth0(Checkout);
