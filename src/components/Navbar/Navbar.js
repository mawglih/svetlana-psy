import React, { Component } from 'react';
import './Navbar.css';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Igor Jewelry</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem><Link to="/" className="link-to">Home</Link></NavItem>
                    <NavItem><Link to="/about" className="link-to">About</Link></NavItem>
                    <NavItem><Link to="/contactus" className="link-to">Contact us</Link></NavItem>
                    
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navigation;