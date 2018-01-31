import React, { Component } from 'react';
import './Navbar.css';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Item} from '../../utils/Item';
import {ItemEng} from '../../utils/Item-Eng';


class Navigation extends Component {
    
    constructor(props) {
        super(props);

    }
    



    render() {
        return(
            <div id="navbar-custom">
                <Navbar collapseOnSelect inverse>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">{this.props.eng ? ItemEng[2].namePers : Item[2].namePers}</a>
                    </Navbar.Brand>
                    <button className={`btn-lang btn-lang__${this.props.lang}`} onClick={this.props.handleClick}>{this.props.lang}</button>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <ul id="nav-list" className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/" className="link-to">{this.props.eng ? ItemEng[2].link1 : Item[2].link1}</Link>
                            </li>
                            <li>
                            <Link to="/about" className="link-to">{this.props.eng ? ItemEng[2].link2 : Item[2].link2}</Link>
                            </li>
                            <li>
                            <Link to="/cons" className="link-to">{this.props.eng ? ItemEng[2].link3 : Item[2].link3}</Link>
                            </li>
                            <li>
                                <Link to="/contactus" className="link-to">{this.props.eng ? ItemEng[2].link4 : Item[2].link4}</Link>
                            </li>

                        </ul>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}
export default Navigation;