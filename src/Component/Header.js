import React from "react";
import { Navbar, NavItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Container, Nav, NavDropdown } from "react-bootstrap";
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
                    <Link href="" to="/" className="nav-link item">
                      Home
                    </Link>
                    <Link className="nav-link item" to="/profile">
                      Profile
                    </Link>
                    <NavDropdown title="Prodocuts" id="collasible-nav-dropdown">
                      <NavDropdown.Item>
                        <Link className="nav-link inneritem" to="/clothing1">
                          Woman Clothing
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="nav-link inneritem" to="/jewelery">
                          Jwelery
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="nav-link inneritem" to="/electronics">
                          children Clothings
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="nav-link inneritem" to="/clothing2">
                          Men Clothings
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="nav-link inneritem" to="/game">
                          Games
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Link to="/about" className="nav-link item">
                      About Us
                    </Link>
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
