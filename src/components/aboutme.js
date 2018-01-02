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
            <ul className="aboutme-list">
                {this.renderAbout()}
            </ul>
 
        )
    }
}

export default AboutMe;