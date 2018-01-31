import React, { Component } from 'react';
import TestimonialItem from '../components/testimonial-item';
import { TestimonialShort } from '../utils/testim_short';
import { TestimonialShortEng } from '../utils/testim_short_eng';

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prop: TestimonialShort
        }
    }

    componentDidMount() {
        if (this.props.eng) {
            this.setState({
                Prop: TestimonialShortEng
            });
        } else {
            this.setState({
                Prop: TestimonialShort
            });
        }
    }

    renderTestimonial() {
        return this.state.Prop.map((test) => {
            return <TestimonialItem key = {test.name} name = {test.name} city = {test.city}           text = {test.text}/>
        });
    }

    render() {
        return ( 
        <div className="section-testimonials">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src='../images/video1.mp4' type = "video/mp4"/>
                    <source src='../images/video1.webm' type = "video/webm"/>
                    Your browser is not supported!
                </video> 
            </div> 
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary u-margin-bottom-small story__main">
                    {this.state.Prop[1].heading1} 
                </h2> 
            </div> 
            {this.renderTestimonial()} 
            <div className="u-center-text u-margin-top-big">
                <a className="btn__text" href="/testimall"> {this.state.Prop[1].heading2} &rarr; </a> 
            </div> 
        </div>
        );
    }
}

export default Testimonial;