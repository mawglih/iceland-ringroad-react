import React, { Component } from 'react';
import { connect } from 'react-redux';
import YourBookingItem from '../components/your-booking-item';

class YourBookings extends Component {

    renderTrips() {
        return this.props.allTrips.map((trip) => {
            return (
                <YourBookingItem key={trip.id} image={trip.image} name={trip.name} text={trip.textShort} description={trip.textLong}/>
            );
        });

    }
    render() {
        return ( 
            <div className="row">
                {this.renderTrips()} 
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        allTrips: state.allTrips
    }
}

export default connect(mapStateToProps)(YourBookings);