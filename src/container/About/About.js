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
            {this.props.eng ? <h1 className="about-carousel-heading">How do I work with clients:</h1> : 
            <h1 className="about-carousel-heading">Особенности работы со мной:</h1>}
            <div className="row">
                <MyCarousel eng={this.props.eng}/>
                <AboutMe eng={this.props.eng}/>
            </div>
                
                <AboutMeDescription eng={this.props.eng}/>
                <Certificates eng={this.props.eng}/>
            </div>
        );
    }
}
export default About;