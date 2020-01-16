import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    return (
        <button // Array of class types lets us dynamically assign button type
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default button;