import React from 'react';
import classes from './MessageItem.module.css';
import { NavLink } from 'react-router-dom';

const MessageTtem = (props) => {
    return (<div className={classes.message}>{props.message}</div>)
}


export default MessageTtem;