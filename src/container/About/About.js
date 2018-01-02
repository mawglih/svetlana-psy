import React, { Component } from 'react';
import MyCarousel from '../../components/Carousel/Carousel';
import AboutMe from '../../components/aboutme';
import AboutMeDescription from '../../components/aboutme-description';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about-class">
                <MyCarousel />
                <AboutMe />
                <AboutMeDescription />
            </div>
        );
    }
}
export default About;