import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import withAuth0 from "@auth0/auth0-react";
import GameSingleProduct from "./GameSingleProduct";
export class GameApiData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		};
	}

	render() {
		const handleToggle = async () => {
			this.setState({ isActive: !this.state.isActive });
		};



		return this.props.gameApiData.map((obj, idx) => {

			return (
				<>
					<GameSingleProduct obj={obj} addFavouriteGame={this.props.addFavouriteGame} />
				</>
			);
		});
	}
}

export default GameApiData;
