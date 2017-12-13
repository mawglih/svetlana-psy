import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Jumb.css';
import {Item} from '../../utils/Item';

class Jumbo extends Component {
    render() {
        return(

            <Jumbotron className="jumbo-class jumbotron">
                <div className="main-body row">
                <h1 className="main-title">Your best shrink</h1>
                <h2 className="main-subtitle">I will replace your memories</h2>
                <div className="col-md-5 col-sm-12 ">
                    <img src="./images/background.png" alt="foto" className="img-responsive img-fluid img-rounded img-thumbnail bg-image center-block"/>
                </div>
                <div className="col-md-6 col-md-offset-1 col-sm-12">
                    <div className="well jumbo-text"><p>{Item[2].text}</p></div>
                </div>
                
                </div>
            </Jumbotron>
        )
    }
}
export default Jumbo;