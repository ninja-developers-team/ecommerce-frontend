import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CarouselMain from "./Component/CarouselMain";
import { Carousel } from "react-bootstrap";
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
			<>
				<div>
					<Carousel
						className="carousel-home"
						nextIcon=""
						prevIcon=""
						nextLabel=""
						prevLabel=""
						interval="2000"
						indicators="false"
					>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://dlq00ggnjruqn.cloudfront.net/prometheus/getImage?id=322298"
								alt="First slide"
								height="600px"
								style={{ objectFit: "cover" }}
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://www.expatica.com/app/uploads/sites/11/2014/05/Shopping.jpg"
								alt="First slide"
								height="600px"
								style={{ objectFit: "cover" }}
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?cs=srgb&dl=pexels-freestocksorg-291762.jpg&fm=jpg"
								alt="First slide"
								height="600px"
								style={{ objectFit: "cover" }}
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="row homeCard">
					{this.state.jeweleryData.length > 0 && (
						<>
							<CarouselMain
								jeweleryData={this.state.jeweleryData}
								path="/jewelery"
								category="Jewelery"
								className="carosel-item"
							/>
							<CarouselMain
								jeweleryData={this.state.clothing2Data}
								path="/clothing2"
								category={`Men' s clothing`}
								className="carosel-item"
							/>
							<CarouselMain
								jeweleryData={this.state.electronicsData}
								path="/electronics"
								category="Children"
								className="carosel-item"
							/>
							<CarouselMain
								jeweleryData={this.state.clothing1Data}
								path="/clothing1"
								category={`Women' s clothing`}
								className="carosel-item"
							/>
							<CarouselMain
								jeweleryData={this.state.gamesData}
								path="/game"
								category="Games"
								className="carosel-item"
							/>
						</>
					)}
				</div>
			</>
		);
	}
}
export default withAuth0(Main);
