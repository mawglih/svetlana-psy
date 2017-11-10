import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './container/Home/Home';
import ContactUs from './container/ContactUs/ContactUs';
import About from './container/About/About';
import Navbar from './components/Navbar/Navbar';
import './App.css';



class App extends Component {
  render() {
    return (
      
        <div className="App container-fluid">
         <Navbar/>
         <Route path="/" exact component={Home} />
         <Route path="/about" component={About} />
         <Route path="/contactus" component={ContactUs} />
        </div>   

    );
  }
}

export default App;
