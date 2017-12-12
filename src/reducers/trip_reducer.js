import _ from 'lodash';
import { ADD_TO_TRIP } from '../actions';


export default function(state = {}, action) {
    switch (action.type) {
        case ADD_TO_TRIP:
            console.log(action.payload);
            return _.mapKeys(action.payload, 'id');
        default:
        return state;
    }
}