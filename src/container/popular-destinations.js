import React, { Component } from 'react';
import PopularDestinationItem from '../components/popular-destination-item';
import { connect } from 'react-redux';
import { addToTrip } from '../actions';
import { bindActionCreators } from 'redux';

class PopularDestinations extends Component {

    renderDestinations() {
        return this.props.destinations.map((trip) => {
            return <PopularDestinationItem  key={trip.id} onClick={() => this.props.addToTrip(trip)} class={trip.id} image={trip.image} title={trip.name} text={trip.textShort} details={trip.textLong} />
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