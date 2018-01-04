import React from 'react';

export default (props) => {
    return(
        <div className="cert__card">
            <figure className="cert__card-fig">
                <img src={props.image} alt="{props.text}" className="cert__card-image img-fluid img-responsive img-thumbnail"/>
                <figcaption className="cert__card-text">{props.text}</figcaption>
            </figure>
        </div>
    )
}
