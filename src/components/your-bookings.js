import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToTrip } from '../actions';

class YourBookings extends Component {
    render() {
        return ( 
            <div>
                Booking 
            </div>
        )

    }
}
export default connect(null, { addToTrip })(YourBookings);