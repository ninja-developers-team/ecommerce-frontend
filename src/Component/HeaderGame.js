import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
export class HeaderGame extends Component {
	render() {
		return (
			<>
				<Nav class="nav-game" variant="pills">
					<NavLink exact to="/">
						products
					</NavLink>

					<NavLink exact to="/favourite">
						my carts
					</NavLink>
				</Nav>
			</>
		);
	}
}

export default HeaderGame;
