import React from "react";
import Card from "react-bootstrap/Card";
import LoginButton from "./Component/LoginButton";

class Login extends React.Component {
	render() {
		return (
			<div className="main">
				<Card>
					<h1>Welcome To Our Store Shope and Shope</h1>
					<Card.Body>
						<Card.Title>
							<h2>Log In</h2>
						</Card.Title>
						<Card.Text>Click Below to Log In</Card.Text>
						<LoginButton />
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Login;
