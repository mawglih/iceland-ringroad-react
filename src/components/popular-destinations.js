import React, { Component } from 'react';
import PopularDestinationItem from './components/popular-destination-item';

class PopularDestinations extends Component {
    render() {
        return(
            <div className="section-popular-destinations">
                <PopularDestinationItem />
            </div>
        )
    }
}
export default PopularDestinations;