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
				<div className=" maincontainer">
					<div class="containerCheckout">
						<div class="py-5 text-center">
							<h2>Checkout </h2>
						</div>

						<div class="your-cart">
							<div class="inputs col-md-4 order-md-2 mb-4">
								<h4 class="d-flex justify-content-between align-items-center mb-3">
									<span class="text-muted">Your cart</span>
									<span class="badge badge-secondary badge-pill">3</span>
								</h4>
								<ul class="list-group mb-3">
									{this.state.cartList.map((item) => {
										return (
											(total = total + Number(item.price)),
											(
												<li class="list-group-item d-flex justify-content-between lh-condensed">
													<div>
														<h6 class="my-0">{item.title}</h6>
														<small class="text-muted">{item.quantity}</small>
													</div>
													<span class="text-muted">$ {item.price}</span>
												</li>
											)
										);
									})}
									<li class="list-group-item d-flex justify-content-between">
										<span>Total (USD)</span>
										<strong>${total}</strong>
									</li>
								</ul>
								<form
									class="submitcard card p-2"
									onSubmit={this.handleDiscount}
								>
									<div class="input-group">
										<input
											type="text"
											class="form-control"
											placeholder="Promo code"
											name="discount"
										/>
										<div class="input-group-append">
											<button type="submit" class="btn btn-secondary">
												Redeem
											</button>
										</div>
									</div>
									{this.state.showDiscount && (
										<>
											<li class="list-group-item d-flex justify-content-between lh-condensed">
												<div>
													<h6 class="my-0">Your Discount</h6>
												</div>
												<strong>{this.state.disconutNum}%</strong>
											</li>
											<li class="list-group-item d-flex justify-content-between">
												<span>Total (USD)</span>
												<strong>
													<del>${total}</del>
												</strong>
											</li>
											<li class="list-group-item d-flex justify-content-between">
												<span>Total After Discount (USD)</span>
												<strong>${this.state.totlaWithdiscount}</strong>
											</li>
										</>
									)}
								</form>
							</div>
							<div class="billing  col-md-8 order-md-1">
								<h4 class="mb-3">Billing address</h4>
								<form class="billing-address  needs-validation" novalidate>
									<div class="name">
										<div class="first col-md-6 mb-3">
											<label for="firstName">First name</label>
											<input
												type="text"
												class="form-control"
												id="firstName"
												placeholder=""
												value=""
												required
											/>
											<div class="invalid-feedback">
												Valid first name is required.
											</div>
										</div>
										<div class="last col-md-6 mb-3">
											<label for="lastName">Last name</label>
											<input
												type="text"
												class="form-control"
												id="lastName"
												placeholder=""
												value=""
												required
											/>
											<div class="invalid-feedback">
												Valid last name is required.
											</div>
										</div>
									</div>
									<div class="mb-3">
										<label for="username">Username</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text">@</span>
											</div>
											<input
												type="text"
												class="form-control"
												id="username"
												placeholder="Username"
												required
											/>
											<div class="invalid-feedback">
												Your username is required.
											</div>
										</div>
									</div>
									<div class="mb-3">
										<label for="email">
											Email <span class="text-muted">(Optional)</span>
										</label>
										<input
											type="email"
											class="form-control"
											id="email"
											placeholder="you@example.com"
										/>
										<div class="invalid-feedback">
											Please enter a valid email address for shipping updates.
										</div>
									</div>
									<div class="mb-3">
										<label for="address">Address</label>
										<input
											type="text"
											class="form-control"
											id="address"
											placeholder="1234 Main St"
											required
										/>
										<div class="invalid-feedback">
											Please enter your shipping address.
										</div>
									</div>
									<div class="mb-3">
										<label for="address2">
											Address 2 <span class="text-muted">(Optional)</span>
										</label>
										<input
											type="text"
											class="form-control"
											id="address2"
											placeholder="Apartment or suite"
										/>
									</div>
									<div class="">
										<div class="col-md-5 mb-3">
											<label for="country">Country</label>
											<select cclass="form-control" id="country" required>
												<option value="">Choose...</option>
												{this.state.countries.map((country) => {
													return <option>{country.country}</option>;
												})}
											</select>
											<div class="invalid-feedback">
												Please select a valid country.
											</div>
										</div>
										<div class="col-md-3 mb-3">
											<label for="state">state</label>
											<input
												type="text"
												class="form-control"
												id="state"
												placeholder=""
												required
											/>
											<div class="invalid-feedback">
												Please select a valid state
											</div>
										</div>
										<div class="col-md-3 mb-3">
											<label for="zip">Zip</label>
											<input
												type="text"
												class="form-control"
												id="zip"
												placeholder=""
												required
											/>
											<div class="invalid-feedback">Zip code required.</div>
										</div>
									</div>

									<hr class="mb-4" />
									<h4 class="mb-3">Payment</h4>
									<div class="d-block my-3">
										<div class="custom-control custom-radio">
											<input
												id="credit"
												name="paymentMethod"
												type="radio"
												class="custom-control-input"
												checked
												required
											/>
											<label class="custom-control-label" for="credit">
												Credit card
											</label>
										</div>
										<div class="custom-control custom-radio">
											<input
												id="debit"
												name="paymentMethod"
												type="radio"
												class="custom-control-input"
												required
											/>
											<label class="custom-control-label" for="debit">
												Debit card
											</label>
										</div>
										<div class="custom-control custom-radio">
											<input
												id="paypal"
												name="paymentMethod"
												type="radio"
												class="custom-control-input"
												required
											/>
											<label class="custom-control-label" for="paypal">
												Paypal
											</label>
										</div>
									</div>
									<div class="">
										<div class="col-md-6 mb-3">
											<label for="cc-name">Name on card</label>
											<input
												type="text"
												class="form-control"
												id="cc-name"
												placeholder=""
												required
											/>
											<small class="text-muted">
												Full name as displayed on card
											</small>
											<div class="invalid-feedback">
												Name on card is required
											</div>
										</div>
										<div class="col-md-6 mb-3">
											<label for="cc-number">Credit card number</label>
											<input
												type="text"
												class="form-control"
												id="cc-number"
												placeholder=""
												required
											/>
											<div class="invalid-feedback">
												Credit card number is required
											</div>
										</div>
									</div>
									<div class="">
										<div class="col-md-3 mb-3">
											<label for="cc-expiration">Expiration</label>
											<input
												type="text"
												class="form-control"
												id="cc-expiration"
												placeholder=""
												required
											/>
											<div class="invalid-feedback">
												Expiration date required
											</div>
										</div>
										<div class="col-md-3 mb-3">
											<label for="cc-expiration">CVV</label>
											<input
												type="text"
												class="form-control"
												id="cc-cvv"
												placeholder=""
												required
											/>
											<div class="invalid-feedback">Security code required</div>
										</div>
									</div>
									<hr class="mb-4" />
									<Link to="/">
										<button
											id="pay-btn"
											class="pay-btn-checkout"
											class="btn btn-primary "
											type="button"
										>
											Pay
										</button>
									</Link>
								</form>
							</div>
						</div>
						<footer class="my-5 pt-5 text-muted text-center text-small"></footer>
					</div>
				</div>
			</div>
		);
	}
}

export default withAuth0(Checkout);
