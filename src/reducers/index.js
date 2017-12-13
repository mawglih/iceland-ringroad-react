import { combineReducers } from 'redux';
import TripReducer from './trip_reducer';
import AllTrips from './all_trips';

const rootReducer = combineReducers({
  allTrips : AllTrips,
  selectedTrip: TripReducer
});

export default rootReducer;