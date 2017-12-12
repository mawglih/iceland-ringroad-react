import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    handleClick() {
        let checkbox = document.getElementById("navi-toggle");
        checkbox.checked = false;
    }
    render() {
        return(
            <div>
                <input type="checkbox" id="navi-toggle" className="navigation__checkbox"/>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon"></span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list" onClick={this.handleClick.bind(this)}>
                        <li className="nivigation__item"><Link to="/" className="navigation__link">Home</Link></li>
                        <li className="nivigation__item"><Link to="/about-iceland" className="navigation__link">About Iceland</Link></li>
                        <li className="nivigation__item"><Link to="/popular-destinations" className="navigation__link">Popular Destinations</Link></li>
                        <li className="nivigation__item"><Link to="/success-stories" className="navigation__link">Success Stories</Link></li>
                        <li className="nivigation__item"><Link to="/your-bookings" className="navigation__link">Your Booking</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Navigation;