import React, { Component } from 'react';

class BookingForm extends Component {
    render() {
        return(
            <form action="#" className="form">
                 <div className="u-center-text u-margin-bottom-medium">
                    <h2 className="heading-secondary">
                        Start booking now
                    </h2>
                </div>
                <div className="form__group">
                    <input type="text" placeholder="Full Name" id="name" required className="form__input"/>
                    <label htmlFor="name" className="form__label">Full Name</label>
                </div>
                <div className="form__group">
                    <input type="email" placeholder="Email address" id="email" required className="form__input"/>
                    <label htmlFor="email" className="form__label">Email address</label>
                </div>
                <div className="form__group">
                    <div className="form__radio-group">
                        <input type="radio" id="small" className="form__radio-input" name="radio"/>
                        <label htmlFor="small" className="form__radio-label"><span className="form__radio-button"></span> Small tour group</label>
                    </div>
                    <div className="form__radio-group u-margin-bottom-medium">
                        <input type="radio" id="large" className="form__radio-input" name="radio"/>
                        <label htmlFor="large" className="form__radio-label"><span className="form__radio-button"></span> Large tour group</label>
                    </div>
                </div>
                <div className="form__group">
                    <button className="btn btn-blue">Next &rarr;</button>    
                </div>
            </form>
        )
    }
}
export default BookingForm;