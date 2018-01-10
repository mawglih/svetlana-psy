import React, { Component } from 'react';
import { AboutMeData } from '../utils/aboutme-data';
import AboutMeItem from './aboutme-item';

class AboutMe extends Component {
    renderAbout() {
        return AboutMeData.map((data) => {
            return <AboutMeItem key={AboutMeData.indexOf(data)} text= {data.text} />
        });
    }
    
    render() {
        return(
            <div className="aboutme-div col-md-5">
            <ul className="aboutme-list">
                {this.renderAbout()}
            </ul>
            </div>
        )
    }
}

export default AboutMe;