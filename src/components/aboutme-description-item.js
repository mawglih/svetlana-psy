import React from 'react';

export default (props) => {
    return(
        <div className="row u-margin-bottom-small about-desc-item">
        <div className="story">
            <div className="story__text">
            <h3 className="aboutme-list-item">{props.text}</h3>
            </div>
        </div>
    </div>
    )
}