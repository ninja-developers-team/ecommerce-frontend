import React, { Component } from "react";
import MenCard from "../card/MenCard";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
class MenClothing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menCollection: [],
			showModel: false,
		};
	}
	componentDidMount = () => {
		axios.get(`https://asac-ecommerce-api.herokuapp.com/man `).then((res) => {
			this.setState({
				menCollection: res.data.data.man,
				menCollection2: res.data.data.man,
			});
		});
	};
	selectedValue = (e) => {
		let value = Number(e.target.value);
		let menCollection = this.state.menCollection;
		this.state.menCollection.sort((a, b) => {
			if (value === 2) {
				return Number(b.price) - Number(a.price);
			} else if (value === 1) {
				return Number(a.price) - Number(b.price);
			} else {
				return this.state.menCollection;
			}
		});
		this.setState({
			menCollection: menCollection,
		});
	};
	selectType = (event) => {
		let type = event.target.value.toLowerCase();
		console.log(type);
		if (type) {
			let filterdData = this.state.menCollection2.filter((card) => {
				return card.title.toLowerCase().includes(type);
			});
			this.setState({
				menCollection: filterdData,
			});
			console.log(this.state.menCollection);
		}
		if (type === "all") {
			this.setState({
				menCollection: this.state.menCollection2,
			});
		}
	};

	render() {
		return (
			<div>
				<form class="filter">
					<select
						class="form-control"
						onChange={this.selectType}
						placeholder="Filter Your Item"
					>
						<option value="all">Filter Your Item On Categories </option>
						<option value="SUIT">Suit</option>
						<option value="SHIRT">Shirt</option>
						<option value="PANTS">Pant's</option>
						<option value="BLOUSE">Blouse</option>
					</select>

					{/* <label for="selectBox">Sort by price</label> */}
					<select
						class="form-control"
						id="selectBox"
						onClick={this.selectedValue}
						placeholder="Filter Your Item"
					>
						<option value="">Filter Your Item</option>
						<option value="1">from lowest to highest price</option>
						<option value="2">From the highest price to the lowest</option>
					</select>
				</form>
				<Row xs={1} md={3} className="g-4">
					{this.state.menCollection.map((menItem) => (
						<MenCard menItem={menItem} />
					))}
				</Row>
			</div>
		);
	}
}
export default MenClothing;
