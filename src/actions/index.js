export const ADD_TO_TRIP = 'add_to_trip';

export function selectedTrip(trip) {
    return {
        type: ADD_TO_TRIP,
        payload: trip
    };
}