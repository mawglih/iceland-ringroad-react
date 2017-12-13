import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestDestinations extends Component {
    render() {
        if(!this.props.selectedTrip) {
            return <div>Select trips to get started</div>
        }
        return(
            <div>
            <h3>Trip name: </h3> 
            <div>{this.props.selectedTrip.name}</div>   
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedTrip: state.trips
    };
}
export default connect(mapStateToProps)(TestDestinations);