import React from 'react';

export default (props) => {
    return(
        <div>
            <h3 className="heading-tertiary u-margin-bottom-small">{props.title}</h3>
            <p className="paragraph">
            {props.text}
            </p>
        </div>
        
    );
}