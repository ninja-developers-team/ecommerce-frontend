import React from 'react';
import { Navbar, NavItem, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" variant="secondary">
                <Navbar.Brand>Stop And Shop</Navbar.Brand>
                <Navbar.Brand>
                    {/* <Image src="" rounded />
                     require('../assets/logo_transparent.png')*/}'
                    {/* <img  alt="..." /> */}
                </Navbar.Brand>
                <NavItem><Link to="" className="nav-link">Home</Link>{' '}</NavItem>
                <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
                <NavItem><Link to="/clothing1" className="nav-link">women's clothing</Link></NavItem>
                <NavItem><Link to="/jewelery" className="nav-link"> jewelery </Link></NavItem>
                <NavItem><Link to="/electronics" className="nav-link">electronics</Link></NavItem>
                <NavItem><Link to="/clothing2" className="nav-link">men's clothing</Link></NavItem>
                <NavItem><Link to="/Cars" className="nav-link">Cars</Link></NavItem>

                {/* TODO: if the user is logged in, render a navigation link to profile page */}
                {/* TODO: if the user is logged in, render the `LogoutButton` */}
            </Navbar >
        )
    }
}
export default Header