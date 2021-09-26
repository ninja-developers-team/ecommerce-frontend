import React from 'react';
import logo from "../assets/logo_transparent.png"

import { Navbar, NavItem, Image } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="light">
                < Navbar.Brand >  Stop and Shop</Navbar.Brand >
                <Navbar.Brand>
                    <Image width="50px" height="50px" src={logo} rounded />
                </Navbar.Brand>
                <NavItem >contact us  </NavItem>
            </Navbar >
        )
    }
}

export default Footer;