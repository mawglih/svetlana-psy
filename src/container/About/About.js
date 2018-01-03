import React, { Component } from 'react';
import MyCarousel from '../../components/Carousel/Carousel';
import AboutMe from '../../components/aboutme';
import AboutMeDescription from '../../components/aboutme-description';
import Certificates from '../../components/certificates';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about-class">
                <MyCarousel />
                <AboutMe />
                <AboutMeDescription />
                <Certificates />
            </div>
        );
    }
}
export default About;