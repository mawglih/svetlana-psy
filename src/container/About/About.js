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
            <h1 className="about-carousel-heading">Особенности работы со мной:</h1>
            <div className="row">
                <MyCarousel />
                <AboutMe />
            </div>
                
                <AboutMeDescription />
                <Certificates />
            </div>
        );
    }
}
export default About;