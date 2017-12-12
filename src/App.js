import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AboutIceland from './components/about-iceland';
import Home from './components/home';
import PopularDestinations from './components/popular-destinations';
import SuccessStories from './components/success-stories';
import YourBookings from './components/your-bookings';
import Footer from './components/footer';
import Navigation  from './components/navigation';
import './App.css';

class App extends Component {
    render() {
        return ( <div>
            <Navigation/>
            <Route path="/" exact component={Home} />
            <Route path="/about-iceland" component={AboutIceland} />
            <Route path="/popular-destinations" component={PopularDestinations} />
            <Route path="/success-stories" component={SuccessStories} />
            <Route path="/your-bookings" component={YourBookings} />
            <Footer/>

            </div>
        );
    }
}

export default App;
