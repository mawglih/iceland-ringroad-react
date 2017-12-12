import { combineReducers } from 'redux';
import TripReducer from './trip_reducer';

const rootReducer = combineReducers({
  trips: TripReducer
});

export default rootReducer;