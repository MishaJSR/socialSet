import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
        return (
            <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg'></img>
            
            <div className={classes.loginBlock}>
            <NavLink to="/login" >{props.userAuthData.isAuth? props.userAuthData.login : "Login please"}</NavLink>
            </div>
        </header>
        );    

}

export default Header;