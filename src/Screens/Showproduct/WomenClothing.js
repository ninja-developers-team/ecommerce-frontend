import React, { Component } from "react";
import WomanCard from "../card/WomanCard";
import { Row } from "react-bootstrap";
import axios from "axios";
class WomenClothing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			womanCollection: [],
			filterData: [],
		};
	}
	componentDidMount = async () => {
		const clothing1 = await axios.get(
			`https://asac-ecommerce-api.herokuapp.com/woman `
		);
		this.setState({
			womanCollection: clothing1.data.data.woman,
			womanCollection2: clothing1.data.data.woman,
		});
	};
	selectedValue = (e) => {
		let value = Number(e.target.value);
		console.log(value);
		let womanCollection = this.state.womanCollection;
		this.state.womanCollection.sort((a, b) => {
			if (value === 2) {
				return Number(b.price) - Number(a.price);
			} else if (value === 1) {
				return Number(a.price) - Number(b.price);
			}
		});

		this.setState({
			womanCollection: womanCollection,
		});
	};
	selectType = (event) => {
		let type = event.target.value.toLowerCase();
		console.log(type);
		if (type) {
			let filterdData = this.state.womanCollection2.filter((card) => {
				return card.title.toLowerCase().includes(type);
			});
			this.setState({
				womanCollection: filterdData,
			});
			console.log(this.state.womanCollection);
		}
		if (type === "all") {
			this.setState({
				womanCollection: this.state.womanCollection2,
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
						<option value="Dresses">Dresses</option>
						<option value="JACKET">Jacket</option>
						<option value="SUIT">Suit</option>
					</select>
					<select
						class="form-control"
						onClick={this.selectedValue}
						placeholder="Filter Your Item"
					>
						<option value="all">Filter Your Item Depend On Price</option>
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
