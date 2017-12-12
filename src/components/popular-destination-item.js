import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToTrip } from '../actions';

 class PopularDestinationItem extends Component {
     constructor(props) {
         super(props);
         this.onAddTrip = this.onAddTrip.bind.this;
     }

     onAddTrip(item) {
         this.props.addToTrip(item);
     }
     render() {
        return(
            <div className="col-1-of-4 u-margin-bottom-small">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className={`card__picture card__picture-index-${this.props.class}`}>
                        
                        </div>
                        <h4 className="card__heading">
                            <span className={`card__heading-span card__heading-span-index-${this.props.class}`}>{this.props.title}</span>
                        </h4>
                        <div className="card__detail">
                            <p>{this.props.text}</p>
                        </div>
                    </div>
                    <div className={`card__side card__side--back card__side--back-index-${this.props.class}`}>
                        <div className="card__cta">
                            <div className="card__info-box">
                                <p className="card__info-box">{this.props.details}</p>
                            </div>
                            <span onClick="this.onAddTrip(this.props.data)" className="btn btn-white">Add to trip</span>
                        </div>
                    </div>
                </div>
            </div> 
        );
     }
    
}
export default PopularDestinationItem;