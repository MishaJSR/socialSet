import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.dialogs_items}>
            <NavLink to={"/dialogs/" + props.id} className={navData => navData.isActive ? classes.active : classes.dialogs_items}>{props.name}</NavLink>
        </div>
    )};


export default DialogItem;