import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CarouselMain from "./Component/CarouselMain";
export class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			jeweleryData: [],
			clothing1Data: [],
			clothing2Data: [],
			electronicsData: [],
			gamesData: [],
		};
	}
	checkUser = async (config) => {
		const axiosResponse = await axios(config);
		setTimeout(axiosResponse, 3000);
		this.setState({
			user: axiosResponse.data,
		});
	};
	componentDidMount = async () => {
		this.props.auth0
			.getIdTokenClaims()
			.then((tokenResponse) => {
				console.log("hi from did amount");
				const jwt = tokenResponse.__raw;
				const config = {
					headers: {
						Authorization: `Bearer ${jwt}`,
					},
					method: "get",
					baseURL: process.env.REACT_APP_BACKEND_URL,
					url: "/verify-token",
				};
				this.checkUser(config);
			})
			.catch((error) => console.log(error));
		const jewelery = await axios.get(
			"https://fakestoreapi.com/products/category/jewelery"
		);
		this.setState({
			jeweleryData: jewelery.data,
		});
		const clothing2 = await axios.get(
			`https://fakestoreapi.com/products/category/men's clothing`
		);
		this.setState({
			clothing2Data: clothing2.data,
		});
		//electronics
		const electronics = await axios.get(
			`https://fakestoreapi.com/products/category/electronics`
		);
		this.setState({
			electronicsData: electronics.data,
		});
		const clothing1 = await axios.get(
			`https://fakestoreapi.com/products/category/women's clothing`
		);
		this.setState({
			clothing1Data: clothing1.data,
		});
		const games = await axios.get(
			`https://www.cheapshark.com/api/1.0/deals?storeID=2&lowerPrice=100`
		);
		this.setState({
			gamesData: games.data,
		});
	};
	render() {
		console.log(this.state.jeweleryData);
		return (
			<div className="row homeCard">
				{this.state.jeweleryData.length > 0 && (
					<>
						<CarouselMain
							jeweleryData={this.state.jeweleryData}
							path="/jewelery"
							category="Jewelery"
						/>
						<CarouselMain
							jeweleryData={this.state.clothing2Data}
							path="/clothing2"
							category={`Men' s clothing`}
						/>
						<CarouselMain
							jeweleryData={this.state.electronicsData}
							path="/electronics"
							category="Electronics"
						/>
						<CarouselMain
							jeweleryData={this.state.clothing1Data}
							path="/clothing1"
							category={`Women' s clothing`}
						/>
						<CarouselMain
							jeweleryData={this.state.gamesData}
							path="/games"
							category="Games"
						/>
					</>
				)}
			</div>
		);
	}
}
export default withAuth0(Main);
