import React from 'react';
import './WorkItem.css';

export default(props) => {
    return(
        <div className="work-item">
            <div className="media">
                <div className="media-left media-middle">
                    <img className="media-object" src={props.imageSrc} alt={props.imageAlt} />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{props.name}</h4>
                    <p>{props.text}</p>
                    <p><small>{props.textSmall}</small></p>
                </div>
            </div>
        </div>
    );
}