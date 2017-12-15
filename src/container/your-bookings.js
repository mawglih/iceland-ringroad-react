import React, { Component } from 'react';
import { connect } from 'react-redux';
import YourBookingItem from '../components/your-booking-item';

class YourBookings extends Component {

    

    renderTrips() {
        return this.props.selectedTrip.map((trip) => {
            return (
                <YourBookingItem  key={trip.id} image={trip.image} name={trip.name} text={trip.textShort} description={trip.textLong}/>
            );
        });

    }
    render() {
        if(!this.props.selectedTrip) {
            return <div>Select trips to get started</div>
        }
        return ( 
            <div className="row">
                {this.renderTrips()} 
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        selectedTrip: state.selectedTrip
    }
}

export default connect(mapStateToProps)(YourBookings);