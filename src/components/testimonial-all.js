import React, { Component } from 'react';
import TestimonialItem from '../components/testimonial-item';
import { Testimonial } from '../utils/testim_data';

class TestimonialAll extends Component {

    renderTestimonial() {
        return Testimonial.map((test) => {
            return <TestimonialItem key={Testimonial.indexOf(test)} name={test.name} city={test.city} text={test.text} />
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
export default TestimonialAll