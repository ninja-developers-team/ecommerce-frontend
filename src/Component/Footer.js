import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="light">
                < Navbar.Brand >  Stop and Shop</Navbar.Brand >
                <NavItem >contact us  </NavItem>
            </Navbar >
        )
    }
}

export default Footer;