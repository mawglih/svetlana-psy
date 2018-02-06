import React, { Component } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import './StoreLocation.css';
import { StepsData } from '../../utils/steps-data';
import { StepsDataEng} from '../../utils/steps-data-eng';

class StoreLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prop: StepsData
        }
    }
    
    componentDidMount() {
        
        if(this.props.eng) {
           this.setState({
               Prop: StepsDataEng
           });
        } else {
            this.setState({
                Prop: StepsData
            });
        }
    }
    
    render() {
        return(
            <div className="location-class">
                <div className="col-md-6">
                    <GoogleMap />
                </div>
                <div className="col-md-5 location-text-class text-center">
                    <h3>{this.state.Prop[4].contact1}</h3>
                    <span>{this.state.Prop[4].contact2} Brisbane, Queensland, Australia</span><br />
                    <span><i className="fa fa-skype"></i> Skype: lana.love970</span><br />
                    <a href="tel:614-186-43088"><span className="glyphicon glyphicon-earphone"> 614-186-43088</span></a><span> (Whats App, Viber)</span><br />
                    <a href="mailto:fsvmtyear@gmail.com"><span>email: fsvmtyear@gmail.com</span></a>
                    <img src="./images/item3.png" alt="foto" className="img-responsive img-fluid center-block img-class"/>
                </div>
            
            </div>
        )
    }
}
export default StoreLocation;