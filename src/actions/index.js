export const ADD_TO_TRIP = 'add_to_trip';

export function addToTrip(item) {
    var tripArray = [];
    const trip = tripArray.push(item);
    return {
        type: ADD_TO_TRIP,
        payload: trip
    };
}