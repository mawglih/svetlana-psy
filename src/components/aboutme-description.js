import React, { Component } from 'react';
import AboutMeDescriptionItem from './aboutme-description-item';
import { AboutMeData2 } from '../utils/aboutme-data2';

class AboutMeDescription extends Component {

    renderItems() {
        return AboutMeData2.map((item) => {
            return <AboutMeDescriptionItem key={AboutMeData2.indexOf(item)} text={item.text} />
        });
    }

    render() {
        return(
            <div className="section-testimonials u-margin-top-medium">
                <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src='../images/video1.mp4' type="video/mp4"/>
                    <source src='../images/video1.webm' type="video/webm"/>
                    Your browser is not supported!
                </video>
            </div>

                {this.renderItems()}
                <div className="u-center-text u-margin-top-big">
                    <a  className="btn__text" href="/cons">Подробнее о том, как проходят консультации читайте здесь &rarr;</a>
                </div>
            </div>
        );
    }
}

export default AboutMeDescription;