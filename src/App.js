import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Features from './components/features';
import Destinations from './components/destinations';
import Testimonials from './components/testimonials';
import Booking from './components/booking';
import Footer from './components/footer';
import Navigation  from './components/navigation';
import './App.css';

class App extends Component {
    render() {
        return ( <div>
            <Navigation/>
            <Header / >
            <About / >
            <Features / >
            <Destinations / >
            <Testimonials / >
            <Booking />
            <Footer/>
            </div>
        );
    }
}

export default App;