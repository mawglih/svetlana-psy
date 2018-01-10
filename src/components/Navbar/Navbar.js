import React, { Component } from 'react';
import './Navbar.css';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navigation extends Component {
    render() {

        return(
            <div id="navbar-custom">
                <Navbar collapseOnSelect inverse>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Светлана Финашина</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <ul id="nav-list" className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/" className="link-to">Главная</Link>
                            </li>
                            <li>
                            <Link to="/about" className="link-to">Обо мне</Link>
                            </li>
                            <li>
                            <Link to="/cons" className="link-to">Услуги</Link>
                            </li>
                            <li>
                                <Link to="/contactus" className="link-to">Контакты</Link>
                            </li>
                            
                        </ul>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}
export default Navigation;