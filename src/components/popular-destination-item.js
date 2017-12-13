import React from 'react';


 export default (props) => {
    return(
        <div className="col-1-of-4 u-margin-bottom-small">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className={`card__picture card__picture-index-${props.class}`}>
                    
                    </div>
                    <h4 className="card__heading">
                        <span className={`card__heading-span card__heading-span-index-${props.class}`}>{props.title}</span>
                    </h4>
                    <div className="card__detail">
                        <p>{props.text}</p>
                    </div>
                </div>
                <div className={`card__side card__side--back card__side--back-index-${props.class}`}>
                    <div className="card__cta">
                        <div className="card__info-box">
                            <p className="card__info-box">{props.details}</p>
                        </div>
                        <span className="btn btn-white">Add to trip</span>
                    </div>
                </div>
            </div>
        </div> 
    );
 }