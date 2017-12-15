import React, { Component } from 'react';
import { Data } from '../utils/data';
import AboutItem from './about-item';

class About extends Component {
    render() {
        return(
            <div>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting road trip for adventurous people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <AboutItem title={Data[4].title} text={Data[4].text} />
                            <AboutItem title={Data[5].title} text={Data[5].text} />
                            <a  className="btn-text" href="#">Learn more &rarr;</a>
                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src="./images/pic1.jpg" className="composition__photo composition__photo--p1" alt="photo1"/>
                                <img src="./images/pic2.jpg" className="composition__photo composition__photo--p2" alt="photo2"/>
                                <img src="./images/pic3.jpg" className="composition__photo composition__photo--p4" alt="photo3"/>
                                <img src="./images/pic4.jpg" className="composition__photo composition__photo--p3" alt="photo3"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default About;