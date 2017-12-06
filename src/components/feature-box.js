import React from 'react';

export default (props)  => {
    return(
        <div className="col-1-of-4">
            <div className="feature-box">
                <i className={`feature-box__icon fa fa-4x ${props.icon}`}></i>
                <h3 className="heading-tertiary u-margin-bottom-small">{props.title}</h3>
                <p className="feature-box__text">{props.text}</p>
            </div>
        </div>
    );
}