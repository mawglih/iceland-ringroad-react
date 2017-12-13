import React, { Component } from 'react';
import PopularDestinationItem from '../components/popular-destination-item';
import { connect } from 'react-redux';
import { addToTrip } from '../actions';
import { bindActionCreators } from 'redux';

class PopularDestinations extends Component {
    // handleAddToTrip(id, selectedTrip = null) {
    //     for (let trip of this.props.destinations) {
    //         if(id === trip.id) {
    //             selectedTrip = trip;
    //             console.log("Add to trip: ", selectedTrip);
    //         }
    //     }
    //     return selectedTrip;
    // }
    handleOnClick(item, selectedTrip = null) {
        console.log("popular item in parent: ", item);
        for(let trip of this.props.destinations) {
            if(item === trip.id) {
                selectedTrip = trip;
                console.log("Selected trip is: ", selectedTrip);
            }
        }
        return selectedTrip;
    }

    renderDestinations() {
        return this.props.destinations.map((trip) => {
            return <PopularDestinationItem handleOnClick={e => this.handleOnClick(e)} key={trip.id} class={trip.id} image={trip.image} title={trip.name} text={trip.textShort} details={trip.textLong} />
        }); 
    }

    render() {
        return(
            <div className="section-popular-destinations">
                <div className="row">
                    {this.renderDestinations()}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        destinations: state.allTrips
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToTrip : addToTrip}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularDestinations);