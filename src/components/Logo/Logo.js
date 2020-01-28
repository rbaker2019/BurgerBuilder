import React from 'react';
import classes from './Logo.module.css';

// import image to make webpack aware of your files, instead of using relative links
import burgerLogo from '../../assets/images/Logo.png';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt='burger logo' />
        </div>
    );
};


export default logo;