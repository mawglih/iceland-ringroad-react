import React from 'react';

export default (props) => {
    return(
        <div className="row ">
            <div className="story">
                <figure className="story__shape">
                    <img src={props.image} alt={props.text} className="story__image"/>
                    <figcaption className="story__caption">{props.caption}</figcaption>
                </figure>
                <div className="story__text">
                <h3 className="heading-tertiary">{props.text}</h3>
                <p>{props.details}</p>
                </div>
            </div>
        </div>
    );
    
}