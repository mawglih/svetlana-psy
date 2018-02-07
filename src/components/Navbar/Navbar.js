import React from 'react';
import { NavLink } from 'react-router-dom';
import { Item } from '../../utils/Item';
import { ItemEng } from '../../utils/Item-Eng';


export default (props) => {
    return(
        <nav className="navbar navbar-inverse">
            <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <NavLink className="navbar-brand" to="/">{props.eng ? ItemEng[2].namePers : Item[2].namePers}</NavLink>
                <button className={`btn-lang btn-lang__${props.lang}`} onClick={props.handleClick}>{props.lang}</button>
            </div>
        
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                <li><NavLink activeClassName="selected__link" to="/">{props.eng ? ItemEng[2].link1 : Item[2].link1}</NavLink></li>
                <li><NavLink activeClassName="selected__link" to="/about">{props.eng ? ItemEng[2].link2 : Item[2].link2}</NavLink></li>
                <li><NavLink activeClassName="selected__link" to="/cons">{props.eng ? ItemEng[2].link3 : Item[2].link3}</NavLink></li>
                <li><NavLink activeClassName="selected__link" to="/contactus">{props.eng ? ItemEng[2].link4 : Item[2].link4}</NavLink></li>
                </ul>
            </div>{/* /.navbar-collapse */}       
            </div>{/* /.container-fluid */}       
        </nav>
      
    );
}