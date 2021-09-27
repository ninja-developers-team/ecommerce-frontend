import React, { Component } from "react";
import axios from "axios";
import GameApiData from "./GameApiData";
import { Row } from "react-bootstrap";
export class MainGames extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: process.env.REACT_APP_BACKEND_URL,
			gameApiData1: [],
			showGameData: false,
			showApiMessege: false,
			messege: "",
		};
	}

	componentDidMount = async () => {
		axios.get(`${this.state.url}/game`).then(
			(res) => {
				console.log(this.state.gameApiData1.data, 'from did amunt')
				this.setState({
					gameApiData1: res.data,
					showGameData: true,
				});
				console.log(this.state.gameApiData1.data, 'from did amunt')
			}, () => { console.log(this.state.gameApiData1.data) }
		);
	};

	addFavouriteGame = async (object) => {
		const postRequest = await axios.post(
			`${this.state.url}/game/favourite`,
			object
		);
		console.log(object);
		// this.setState({
		// 	messege: postRequest.data,
		// 	showApiMessege: true,
		// });
	};

	render() {
		return (
			<>
				<Row>
					{this.state.showApiMessege && <h3>{this.state.messege}</h3>}
					{this.state.showGameData && (
						<GameApiData
							gameApiData={this.state.gameApiData1}
							addFavouriteGame={this.addFavouriteGame}
						/>
					)}
				</Row>
			</>
		);
	}
}

export default MainGames;
