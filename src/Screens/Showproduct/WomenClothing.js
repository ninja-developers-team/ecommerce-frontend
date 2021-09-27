import React, { Component } from "react";
import WomanCard from "../card/WomanCard";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
class WomenClothing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			womanCollection: [],
			showModel: false,
		};
	}
	componentDidMount = async () => {
		const clothing1 = await axios.get(
			`https://asac-ecommerce-api.herokuapp.com/woman `
		);
		this.setState({
			womanCollection: clothing1.data.data.woman,
		});
	};
	selectedValue = (e) => {
		let value = Number(e.target.value);
		let womanCollection = this.state.womanCollection;
		this.state.womanCollection.sort((a, b) => {
			if (value === 2) {
				return Number(b.price) - Number(a.price);
			} else if (value === 1) {
				return Number(a.price) - Number(b.price);
			} else {
				return this.state.womanCollection;
			}
		});
		this.setState({
			womanCollection: womanCollection,
		});
	};
	render() {
		return (
			<div>
				<form>
					{/* <label for="selectBox">Sort by price</label> */}
					<select
						class="form-control"
						id="selectBox"
						onClick={this.selectedValue}
						placeholder="Filter Your Item"
					>
						<option value="">Filter Your Item </option>
						<option value="1">from lowest to highest price</option>
						<option value="2">From the highest price to the lowest</option>
					</select>
				</form>
				<Row xs={1} md={3} className="g-4">
					{this.state.womanCollection.map((womanItem) => (
						<WomanCard womanItem={womanItem} />
					))}
				</Row>
			</div>
		);
	}
}
export default WomenClothing;
