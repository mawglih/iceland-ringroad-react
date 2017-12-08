import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Features from './components/features';
import Destinations from './components/destinations';
import Testimonials from './components/testimonials';
import Booking from './components/booking';
import './App.css';

class App extends Component {
    render() {
        return ( <div>
            <Header / >
            <About / >
            <Features / >
            <Destinations / >
            <Testimonials / >
            <Booking />
            </div>
        );
    }
}

export default App;