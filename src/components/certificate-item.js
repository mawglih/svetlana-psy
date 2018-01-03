import React from 'react';

export default (props) => {
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 cert">
            <figure className="cert__card">
                <img src={props.image} alt="{props.text}" className="cert__card-image img-fluid img-responsive img-thumbnail"/>
                <figcaption className="cert__card-text">{props.text}</figcaption>
            </figure>
        </div>
    )
}