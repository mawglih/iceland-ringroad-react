import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutIceland from './container/about-iceland';
import Home from './components/home';
import PopularDestinations from './container/popular-destinations';
import SuccessStories from './components/success-stories';
import YourBookings from './container/your-bookings';
import Footer from './components/footer';
import Navigation  from './components/navigation';
import './App.css';

class App extends Component {
    render() {
        return ( <div>
            <Navigation/>
            <Switch>
              <Route path="/about-iceland" component={AboutIceland} />
              <Route path="/popular-destinations" component={PopularDestinations} />
              <Route path="/success-stories" component={SuccessStories} />
              <Route path="/your-bookings" component={YourBookings} />
              <Route path="/" exact component={Home} />
            </Switch>
            <Footer/>

            </div>
        );
    }
}

export default App;
