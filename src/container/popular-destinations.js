import React, { Component } from 'react';
import PopularDestinationItem from '../components/popular-destination-item';
import { connect } from 'react-redux';
import { selectedTrip } from '../actions';
import { bindActionCreators } from 'redux';

class PopularDestinations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTrips: []
        }
    }

    handleOnClick(item, selectedTrip = null) {
        let myTrips = this.state.allTrips;
        console.log("popular item in parent: ", item);
        for(let trip of this.props.destinations) {
            if(item === trip.id) {
                selectedTrip = trip;
                myTrips.push(selectedTrip);
                this.setState({
                    allTrips: myTrips
                });
                this.props.selectedTrip(this.state.allTrips);                
                
            }
        }
        console.log("All trips are: ", this.state.allTrips);
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
    return bindActionCreators({ selectedTrip: selectedTrip}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularDestinations);