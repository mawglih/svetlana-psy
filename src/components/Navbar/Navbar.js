import React, { Component } from 'react';
import './Navbar.css';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navigation extends Component {
    render() {

        return(
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Svetlana Psychology</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <ul id="nav-list" className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/" className="link-to">Home</Link>
                            </li>
                            <li>
                            <Link to="/about" className="link-to">About</Link>
                            </li>
                            <li>
                                <Link to="/contactus" className="link-to">Contact Us</Link>
                            </li>
                            <li id="phone" className="hidden-xs">
                            <a href="tel:888-888-0000"><span className="glyphicon glyphicon-earphone link-to">888-888-0000</span></a>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>
                <div id="call-btn" className="visible-xs text-center">
                    <a className="btn link-to" href="tel:888-888-0000">
                    <span className="glyphicon glyphicon-earphone link-to "></span> 888-888-0000
                    </a>
                </div>
            </div>
        )
    }
}
export default Navigation;