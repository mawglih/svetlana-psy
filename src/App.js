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
  render() {
    return (
      
        <div className="App container-fluid">
         <Navbar/>
         <Route path="/cons" component={Cons} />
         <Route path="/about" component={About} />
         <Route path="/contactus" component={ContactUs} />
         <Route path="/testimall" component={TestimonialAll} />
         <Route path="/" exact component={Home} />
         <Footer />
        </div>   

    );
  }
}

export default App;
