import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Features from './components/features';
import Destinations from './components/destinations';
import Testimonials from './components/testimonials';
import './App.css';

class App extends Component {
    render() {
        return ( <
            div >
            <
            Header / >
            <
            About / >
            <
            Features / >
            <
            Destinations / >
            <
            Testimonials / >
            <
            /div>
        );
    }
}

export default App;