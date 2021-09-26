import React from 'react';
import { Navbar, NavItem, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import logo from "../assets/logo_transparent.png"
class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="secondary">
                <Navbar.Brand>Stop And Shop</Navbar.Brand>
                <Navbar.Brand>
                    <Image width="100px" height="100px" src={logo} rounded />
                </Navbar.Brand>
                {!this.props.auth0.isAuthenticated ? <LoginButton /> :
                    <>

                        <LogoutButton />
                        <NavItem>
                            <Link to="" className="nav-link">Home</Link>{' '}
                        </NavItem>
                        <NavItem>
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/clothing1" className="nav-link">women's clothing</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/jewelery" className="nav-link"> jewelery </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/electronics" className="nav-link">electronics</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/clothing2" className="nav-link">men's clothing</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/Cars" className="nav-link">Cars</Link>
                        </NavItem>
                    </>
                }
            </Navbar >
        )
    }
}
export default withAuth0(Header)