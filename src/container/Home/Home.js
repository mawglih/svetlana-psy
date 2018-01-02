import React, { Component } from 'react';
import Jumbo from '../../components/jumbothron/Jumb';
import Problems from '../../components/problems';
import StoreLocation from '../../components/StoreLocation/StoreLocation';
import Footer from '../../components/Footer/Footer';
import Testimonial from '../testimonial';
import './Home.css';

class Home extends Component {
    render() {
      return (
          <div className="Home">
            <div className="container-fluid">
              <Jumbo />
              <div className="row">
                  <Problems />
              </div>
              <Testimonial />
              <StoreLocation />
            </div>
            
          </div>     
      );
    }
  }
  
  export default Home;
  