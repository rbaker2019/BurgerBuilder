import React from 'react';

import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = (props) => {
    // conditionally add animation for opening/closing


    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;