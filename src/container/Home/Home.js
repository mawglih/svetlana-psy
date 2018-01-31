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
              <Jumbo eng={this.props.eng}/>
              <div className="row">
                  <Problems eng={this.props.eng}/>
              </div>
              <Testimonial eng={this.props.eng}/>
            </div>
            
          </div>
      );
    }
  }

  export default Home;
