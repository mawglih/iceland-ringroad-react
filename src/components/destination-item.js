import React from 'react';

export default (props) => {
    return(
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">Front</div>
                <div className={`card__side card__side--back ${props.class}`}>Back</div>
            </div>
        </div> 
    );
}