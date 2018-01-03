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
                    <h3>Со мной можно связаться:</h3>
                    <span>Мой адрес: Brisbane, Queensland, Australia</span><br />
                    <span><i className="fa fa-skype"></i> Skype: lana.love970</span><br />
                    <a href="tel:614-186-43088"><span className="glyphicon glyphicon-earphone"> 614-186-43088</span></a><span> (Whats App, Viber)</span><br />
                    <a href="mailto:fsvmtyear@gmail.com"><span>email: fsvmtyear@gmail.com</span></a>
                    <img src="./images/item1.png" alt="foto" className="img-responsive img-fluid center-block img-class"/>
                </div>
            
            </div>
        )
    }
}
export default StoreLocation;