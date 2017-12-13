import React, { Component } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import './StoreLocation.css';

class StoreLocation extends Component {
    
    render() {
        return(
            <div className="location-class">
                <div className="col-md-6">
                    <GoogleMap />
                </div>
                <div className="col-md-5 location-text-class text-center">
                    <h3>You can find us in Galaxy</h3>
                    <span>Our address is Alderley, Queensland, Australia</span><br />
                    <a href="tel:888-888-0000"><span className="glyphicon glyphicon-earphone">888-888-0000</span></a><br />
                    <span>email: fsvmtyear@gmail.com</span>
                    <img src="./images/item1.png" alt="foto" className="img-responsive img-fluid center-block img-class"/>
                </div>
            
            </div>
        )
    }
}
export default StoreLocation;