import React, { Component } from 'react';
import Header from './header';
import About from './about';
import Features from './features';
import Destinations from './destinations';
import Testimonials from './testimonials';
import Booking from './booking';
import PopUp from './popup';

class Home extends Component {
    render() {
        return ( < div >

            <Header />
            <About />
            <Features />
            <Destinations />
            <Testimonials />
            <Booking />

            <PopUp />
            </div>
        );
    }
}

export default Home;