import React from 'react';

export default (props) => {
    return(
        <div className="row u-margin-bottom-small">
        <div className="story">
            <div className="story__text">
            <h3 className="heading-tertiary">{props.name}</h3>
            <h4 className="heading-tertiary">{props.city}</h4>
            <p>{props.text}</p>
            </div>
        </div>
    </div>
    )
}