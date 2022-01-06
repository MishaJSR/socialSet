import React from 'react';
import classes from './UsersItem.module.css';
import { NavLink } from 'react-router-dom';

const UsersItem = (props) => {
    return (
        <div className={classes.uses_Item}>
            <NavLink to={"/users/" + props.id} >{props.name}</NavLink>
        </div>
    )};


export default UsersItem;