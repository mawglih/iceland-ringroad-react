import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <div>
                <input type="checkbox" id="navi-toggle" className="navigation__checkbox"/>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon"></span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="nivigation__item"><a href="#" className="navigation__link"><span>01</span> Home</a></li>
                        <li className="nivigation__item"><a href="#" className="navigation__link"><span>02</span> About Iceland</a></li>
                        <li className="nivigation__item"><a href="#" className="navigation__link"><span>03</span> Popular destinations</a></li>
                        <li className="nivigation__item"><a href="#" className="navigation__link"><span>04</span> Success stories</a></li>
                        <li className="nivigation__item"><a href="#" className="navigation__link"><span>05</span> Your Booking</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Navigation;