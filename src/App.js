import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './container/Home/Home';
import ContactUs from './container/ContactUs/ContactUs';
import About from './container/About/About';
import Navbar from './components/Navbar/Navbar';
import Cons from './container/Cons/cons';
import Footer from './components/Footer/Footer';
import './App.css';
import  TestimonialAll from './components/testimonial-all';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        eng : false,
        lang: 'ENG'
    };
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      if(this.state.eng) {
          this.setState({
              eng: false,
              lang: 'ENG'
          });
      } else {
          this.setState({
              eng: true,
              lang: 'RUS'
          });
      }
      

  }

  render() {
    return (
      
        <div className="container-fluid">
         <Navbar handleClick = {this.handleClick} lang={this.state.lang} eng={this.state.eng} />
         <Route path="/cons" component={() => <Cons eng={this.state.eng}/>} />
         <Route path="/about" component={() => <About eng={this.state.eng}/>} />
         <Route path="/contactus" component={() => <ContactUs eng={this.state.eng}/>} />
         <Route path="/testimall" component={() => <TestimonialAll eng={this.state.eng}/>} />
         <Route exact path="/" component={() => <Home eng={this.state.eng}/>} />
         <Footer />
        </div>   

    );
  }
}

export default App;
