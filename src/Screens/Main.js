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
			"https://asac-ecommerce-api.herokuapp.com/jewelery"
		);
		this.setState({
			jeweleryData: jewelery.data.data.jewelery,
		});
		const clothing2 = await axios.get(
			`https://asac-ecommerce-api.herokuapp.com/man`
		);
		this.setState({
			clothing2Data: clothing2.data.data.man,
		});
		//electronics
		const electronics = await axios.get(
			`https://asac-ecommerce-api.herokuapp.com/children`
		);
		this.setState({
			electronicsData: electronics.data.data.children,
		});
		const clothing1 = await axios.get(
			`https://asac-ecommerce-api.herokuapp.com/woman`
		);
		this.setState({
			clothing1Data: clothing1.data.data.woman,
		});
		const games = await axios.get(
			`https://asac-ecommerce-api.herokuapp.com/game`
		);
		this.setState({
			gamesData: games.data.data.game,
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
							category="Children"
						/>
						<CarouselMain
							jeweleryData={this.state.clothing1Data}
							path="/clothing1"
							category={`Women' s clothing`}
						/>
						<CarouselMain
							jeweleryData={this.state.gamesData}
							path="/game"
							category="Games"
						/>
					</>
				)}
			</div>
		);
	}
}
export default withAuth0(Main);
