import React from 'react';
import classes from './Toolbar.module.css'

import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';

const toolbar = (props) => {
    return (<header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>);
};

export default toolbar;
