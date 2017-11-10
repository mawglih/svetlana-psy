import React, { Component } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import './StoreLocation.css';

class StoreLocation extends Component {
    
    render() {
        return(
            <div className="row location-class">
                <div className="col-md-6">
                    <GoogleMap />
                </div>
                <div className="col-md-6 location-text-class">
                    <h3>You can find us in Hawthorne</h3>
                    <p>Our address is 200 Diamond bridge road</p>
                    <p>Phone: 201-999-0000</p>
                    <p>email: igor@store.com</p>
                    <img src="./images/store2.png" alt="store" className="img-responsive img-fluid center-block img-class"/>
                </div>
            
            </div>
        )
    }
}
export default StoreLocation;