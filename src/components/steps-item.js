import React from 'react';

export default (props) => {
    return(
        <div className="steps__block">
        
                 <p className="steps__block-text">{props.text1}</p>
                 <p className="steps__block-text">{props.text2}</p>
                 <p className="steps__block-text">{props.text3}</p>
                 <p className="steps__block-text">{props.text4}</p>
                 <div className={`steps__block-price ${props.hiddenClass}`}>
                    <p>{props.buttonText}</p>

                 </div>
        </div>
    );
}