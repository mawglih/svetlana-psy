import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Jumb.css';
import {Item} from '../../utils/Item';
import {ItemEng} from '../../utils/Item-Eng';

class Jumbo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prop: Item
        }
    }
    
    componentDidMount() {
        
        if(this.props.eng) {
           this.setState({
               Prop: ItemEng
           });
        } else {
            this.setState({
                Prop: Item
            });
        }
    }
    render() {
        return(

            <Jumbotron className="jumbo-class jumbotron">
                <div className="main-body row">
                <h1 className="main-title"><span className="jumbo__line1">{this.state.Prop[2].name}</span><span className="jumbo__line2"> {this.state.Prop[2].namePers}</span></h1>
                <h3 className="main-subtitle">{this.state.Prop[2].nameH3}</h3>
                <div className="col-md-5 col-sm-12 ">
                    <img src="./images/background.png" alt="foto" className="img-responsive img-fluid img-rounded img-thumbnail bg-image center-block"/>
                </div>
                <div className="col-md-6 col-md-offset-1 col-sm-12">
                    <div className="jumbo-text">
                        <p>{this.state.Prop[2].text}</p>
                        <p>{this.state.Prop[2].textSmall}</p>
                        
                        <p>{this.state.Prop[2].textStrong}</p>
                    </div>
                </div>
                
                </div>
            </Jumbotron>
        )
    }
}
export default Jumbo;