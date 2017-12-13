import React, { Component } from 'react';
import Jumbo from '../../components/jumbothron/Jumb';
import WorkList from '../../components/WorkList/WorkList';
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
                  <WorkList />
              </div>
              <Testimonial />
              <StoreLocation />
            </div>
            <Footer />
          </div>     
      );
    }
  }
  
  export default Home;
  