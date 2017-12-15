import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestDestinationItem from '../components/test-destination-item';

class TestDestinations extends Component {
    generateTrips() {
        console.log('test_dest: ',this.props.selectedTrip)
        return this.props.selectedTrip.map((trip) => {
            return <TestDestinationItem key={trip.id} image={trip.image} name={trip.name} text={trip.textShort} description={trip.textLong}
             />
        })
    }
    render() {
        if(!this.props.selectedTrip) {
            return <div>Select trips to get started</div>
        }
        return(
            <div>
                {this.generateTrips()}             
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedTrip: state.selectedTrip
    };
}
export default connect(mapStateToProps)(TestDestinations);