import React, { Component } from 'react';
import { Data } from '../utils/data';
import DestinationItem from './destination-item';
import { Link } from 'react-router-dom';

class Destinations extends Component {
    render(){
        return(
            <div className="section-destinations" id="section-destinations" >
                <div className="u-margin-bottom-small u-center-text">
                    <h2 className="heading-secondary">
                        Most popular destinations
                    </h2>
                </div>
                    <div className="row">
                        <DestinationItem class="1" title={Data[6].title} text={Data[6].text} details={Data[6].details}/>
                        <DestinationItem class="2" title={Data[7].title} text={Data[7].text} details={Data[6].details}/>
                        <DestinationItem class="3" title={Data[8].title} text={Data[8].text} details={Data[6].details}/>
                    </div>
                <div className="u-center-text u-margin-top-big">
                <Link to="/popular-destinations" className="btn-text">Discover all destinations &rarr;</Link>
                     
                </div>
            </div>
        );
    }
}

export default Destinations