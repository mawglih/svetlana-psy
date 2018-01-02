import React, { Component } from 'react';
import StoreLocation from '../../components/StoreLocation/StoreLocation';
import Testimonial from '../testimonial';
import './ContactUs.css';

class ContactUs extends Component {
    render() {
        return (
            <div>
            <div className="contact-class row">
                <StoreLocation />
                
            </div>
            <Testimonial />
            </div>
            
        );
    }
}
export default ContactUs