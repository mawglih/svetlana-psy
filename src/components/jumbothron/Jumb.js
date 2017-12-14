import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Jumb.css';
import {Item} from '../../utils/Item';

class Jumbo extends Component {
    render() {
        return(

            <Jumbotron className="jumbo-class jumbotron">
                <div className="main-body row">
                <h1 className="main-title"><span className="jumbo__line1">Практический психолог</span><span className="jumbo__line2"> Светлана Финашина</span></h1>
                <h3 className="main-subtitle">Помогаю женщинам преодолевать трудности, справляться со сложными ситуациями, становиться счастливыми</h3>
                <div className="col-md-5 col-sm-12 ">
                    <img src="./images/background.png" alt="foto" className="img-responsive img-fluid img-rounded img-thumbnail bg-image center-block"/>
                </div>
                <div className="col-md-6 col-md-offset-1 col-sm-12">
                    <div className="well jumbo-text">
                        <p>{Item[2].text}</p>
                        <p>{Item[2].textSmall}</p>
                        <hr/>
                        <strong><p>{Item[2].textStrong}</p></strong>
                    </div>
                </div>
                
                </div>
            </Jumbotron>
        )
    }
}
export default Jumbo;