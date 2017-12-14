import React from 'react';

export default (props) => {
    return(
        <div className="col-md-4">
            <div className="card u-margin-bottom-small">
            <div className="card__side card__side--front">
                <div className={`card__picture card__picture-${props.class}`}>
                    
                </div>
                <h4 className="card__heading">
                    <span className={`card__heading-span card__heading-span-${props.class}`}>{props.title}</span>
                </h4>
                <div className="card__text-heading2">
                    <ul className="card__text--ul">
                        {props.text.map((item)=> {
                            return <li className="card__text--li" key={item}>{item}</li>;
                        })}
                    </ul>
                </div>
                

            </div>
        </div>
        </div> 
    );
}