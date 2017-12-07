import React, { Component } from 'react';
import TestimonialItem from './testimonial-item';
import { Data } from '../utils/data';

class Testimonials extends Component {
    render() {
        return(
            <div className="section-testimonials">
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={Data[11].video1} type="video/mp4"/>
                    <source src={Data[11].video2} type="video/webm"/>
                    Your browser is not supported!
                </video>
            </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary u-margin-bottom-small">
                        The happiest journey on Earth
                    </h2>
                </div> 
                    <TestimonialItem caption={Data[9].caption} image={Data[9].image} text={Data[9].text} class="1" details={Data[9].details}/>
                    <TestimonialItem caption={Data[10].caption} image={Data[10].image} text={Data[10].text} class="1" details={Data[10].details}/>
                    <div className="u-center-text u-margin-top-big">
                    <a  className="btn-text" href="#">Read all stories &rarr;</a>
                </div>
            </div>
        );
    }
}
export default Testimonials;