import React from 'react';

export default (props) => {
    return(
        <div className="col-1-of-4">
            <div className="card u-margin-bottom-small">
                <div className="card__side">
                    <div >
                        <img src={props.image} alt={props.name} className="card__image"/>
                    </div>
                    <h4 className="card__heading">
                        <span>{props.name}</span>
                    </h4>
                    <div className="card__text-heading2">
                        <h5>{props.text}</h5>
                    </div>
                    
                    <div className="card__text-booking"> 
                        <p >{props.description}</p>
                    </div>
                    

                </div>
            </div>
        </div> 
    );
}