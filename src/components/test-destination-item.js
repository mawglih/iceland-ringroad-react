import React from 'react';

export default (props) => {
    return(
        <div>
            <p>{props.image}</p>
            <p>{props.name}</p>
            <p>{props.text}</p>
            <p>{props.description}</p>
        </div>
    );
}