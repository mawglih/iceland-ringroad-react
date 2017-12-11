import React, { Component } from 'react';

class Header extends Component {

    render() {
        return(
            <header className="header">
                <div className="header--logo-box">
                    <img src="./logo_zv.png" className="header--logo"/>
                </div>
                <div className="header-text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Discover</span>
                        <span className="heading-primary--sub">the ring road</span>
                    </h1>
                    <a href="#section-destinations" className="btn btn-white btn-animated">Start discovery</a> 
                </div>                  
            </header>
        );
    }
}
export default Header;