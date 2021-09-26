import React from "react";
import Card from "react-bootstrap/Card";
import LoginButton from "./Component/LoginButton";
class Login extends React.Component {
	render() {
		return (
			<div className="main">
				<Card>
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
