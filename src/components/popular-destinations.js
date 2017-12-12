import React, { Component } from 'react';
import PopularDestinationItem from './popular-destination-item';
import { DestinationsData } from '../utils/destinations-data';

class PopularDestinations extends Component {
    render() {
        return(
            <div className="section-popular-destinations">
                <div className="row">
                {DestinationsData.map((data) => {
                    return  <PopularDestinationItem  data={data} class={data.id} image={data.image} title={data.name} text={data.textShort} details={data.textLong} key={data.id} />
                })
                }
                    
                </div>
            </div>
        )
    }
}
export default PopularDestinations;