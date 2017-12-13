import React from 'react';
// import GoogleMapsLoader from 'google-maps';
import './GoogleMap.css';

function urlBuilder() {
    const API = 'AIzaSyB5fSWO-D1V5IkEcltRCT6Kg2UNw-dswpE';
    const URL = `https://www.google.com/maps/embed/v1/place?key=${API}`;
    const coord='-27.424140, 152.995637'; 
    const address='Alderley+Queensland+Australia';
    const zoom='17'; 
    const RETURNED_URL = `${URL}&q=${address}&center=${coord}&zoom=${zoom}`;
    
    return  RETURNED_URL;
}
export default (props) => {
            
        return (
            <div>
                <iframe title="map"
                className="iframe-class"

                    frameBorder="0" 
                    src={urlBuilder()} allowFullScreen> </iframe>
            </div>
        
        )
}
