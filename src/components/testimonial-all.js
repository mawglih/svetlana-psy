import React, { Component } from 'react';
import TestimonialItem from '../components/testimonial-item';
import { Testimonial } from '../utils/testim_data';
import { TestimonialEng } from '../utils/testim_data-eng';

class TestimonialAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Prop: Testimonial
        };
    }
    
    componentDidMount() {
        
        if(this.props.eng) {
           this.setState({
               Prop: TestimonialEng
           });
        } else {
            this.setState({
                Prop: Testimonial
            });
        }
    }

    renderTestimonial() {
        return this.state.Prop.map((test, index) => {
            return <TestimonialItem key={index} name={test.name} city={test.city} text={test.text} />
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