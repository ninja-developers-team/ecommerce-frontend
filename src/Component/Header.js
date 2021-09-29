import React from "react";
import { Navbar, NavItem, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
class Header extends React.Component {
	render() {
		return (
			<Navbar
				className="homeNav"
				collapseOnSelect
				expand="lg"
				variant="secondary"
			>
				<Navbar.Brand>
					<h1>Stop And Shop</h1>
				</Navbar.Brand>
				{!this.props.auth0.isAuthenticated ? (
					<LoginButton />
				) : (
					<>
						<Navbar collapseOnSelect expand="lg">
							<Container>
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="me-auto">
										<NavLink href="" to="/" className="nav-link item">
											<AiFillHome />
										</NavLink>
										<NavLink exact className="nav-link item" to="/profile">
											<FaShoppingCart />
										</NavLink>
										<NavDropdown title="Prodocuts" id="collasible-nav-dropdown">
											<NavDropdown.Item>
												<NavLink
													exact
													className="nav-link inneritem"
													to="/clothing1"
												>
													Woman Clothing
												</NavLink>
											</NavDropdown.Item>
											<NavDropdown.Item>
												<NavLink
													exact
													className="nav-link inneritem"
													to="/jewelery"
												>
													Jwelery
												</NavLink>
											</NavDropdown.Item>
											<NavDropdown.Item>
												<NavLink
													exact
													className="nav-link inneritem"
													to="/electronics"
												>
													children Clothings
												</NavLink>
											</NavDropdown.Item>
											<NavDropdown.Item>
												<NavLink
													exact
													className="nav-link inneritem"
													to="/clothing2"
												>
													Men Clothings
												</NavLink>
											</NavDropdown.Item>
											<NavDropdown.Item>
												<NavLink
													exact
													className="nav-link inneritem"
													to="/game"
												>
													Games
												</NavLink>
											</NavDropdown.Item>
										</NavDropdown>
									</Nav>
									<Nav>
										<NavLink exact to="/about" className="nav-link item">
											About Us
										</NavLink>
										<Link>
											<LogoutButton />
										</Link>
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</>
				)}
			</Navbar>
		);
	}
}
export default withAuth0(Header);
