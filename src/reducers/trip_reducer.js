import { ADD_TO_TRIP } from '../actions';


export default function(state = null, action) {
    switch (action.type) {
        case ADD_TO_TRIP:
            console.log("reducer: ", action.payload);
            return action.payload;        
    }
    return state;
}
