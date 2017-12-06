import React, { Component } from 'react';
import { Data } from '../utils/data';
import DestinationItem from './destination-item';

class Destinations extends Component {
    render(){
        return(
            <div className="section-destinations">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Most popular destinations
                    </h2>
                </div>
                    <div className="row">
                        <DestinationItem/>
                        <DestinationItem/>
                        <DestinationItem/>
                    </div>
                
            </div>
        );
    }
}

export default Destinations