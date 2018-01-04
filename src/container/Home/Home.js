import React, { Component } from 'react';
import Jumbo from '../../components/jumbothron/Jumb';
import Problems from '../../components/problems';
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
            </div>
            
          </div>
      );
    }
  }

  export default Home;
