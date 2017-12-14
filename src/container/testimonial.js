import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestimonialItem from '../components/testimonial-item';

class Testimonial extends Component {

    renderTestimonial() {
        return this.props.testimonials.map((test) => {
            return <TestimonialItem key={test.name} name={test.name} city={test.city} text={test.text} />
        });
    }

    render() {
        return(
            <div className="section-testimonials">
                <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src='../images/video1.mp4' type="video/mp4"/>
                    <source src='../images/video1.webm' type="video/webm"/>
                    Your browser is not supported!
                </video>
            </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary u-margin-bottom-small">
                    Что говорят
                    </h2>
                </div> 
                {this.renderTestimonial()}
                <div className="u-center-text u-margin-top-big">
                    <a  className="btn__text" href="#">Read all stories &rarr;</a>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        testimonials: state.testimonialsShort
    }
}
export default connect(mapStateToProps)(Testimonial);