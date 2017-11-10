import React, { Component } from 'react';
import MyCarousel from '../../components/Carousel/Carousel';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about-class">
                <MyCarousel />
            </div>
        );
    }
}
export default About;