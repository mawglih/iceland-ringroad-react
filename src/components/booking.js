import React, { Component } from 'react';
import BookingForm from './booking-form';

class Booking extends Component {
    render() {
        return(
            <div className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Booking;