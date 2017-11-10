import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Jumb.css';

class Jumbo extends Component {
    render() {
        return(
            <Jumbotron className="jumbo-class">
                <div className="main-body">
                <h1 className="main-title">Best master on Diamond bridge road</h1>
                <h2 className="main-subtitle">We repair all</h2>
                <img src="./images/background2.png" alt="diamond" className="img-responsive img-fluid center-block bg-image"/>
                </div>
            </Jumbotron>
        )
    }
}
export default Jumbo;