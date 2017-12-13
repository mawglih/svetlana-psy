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
            <div>
                {this.renderTestimonial()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        testimonials: state.testimonials
    }
}
export default connect(mapStateToProps)(Testimonial);