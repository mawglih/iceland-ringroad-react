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
                        <DestinationItem class="card__side--back-1"/>
                        <DestinationItem class="card__side--back-2"/>
                        <DestinationItem class="card__side--back-3"/>
                    </div>
                
            </div>
        );
    }
}

export default Destinations