import React from 'react';
import classes from './UsersItem.module.css';
import { NavLink } from 'react-router-dom';

const UsersItem = (props) => {
    return (
        <div className={classes.users_Item}>
            {props.name}
        </div>
    )};


export default UsersItem;