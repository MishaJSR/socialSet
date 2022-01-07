import React from 'react';
import classes from './UsersItem.module.css';
import { NavLink } from 'react-router-dom';

const UsersItem = (props) => {

    let onFollow = () =>{
        // props.onFollow(props.id, props.uFriend);
    }

    return (
        <div className={classes.users_Item}>

            <img className={classes.imgUser} src={props.img_source} />
            <div>
                <button onClick={onFollow}>ene</button>
            </div>
            <div className={classes.name}>
                <span className={classes.spanUser}>{props.name}</span>
            </div>
            <div className={classes.name}>
                <span className={classes.spanUser}>{props.uCity}, {props.uCountry}, {props.uStatus}</span>
            </div>
            <div className={classes.name}>

            </div>
        </div>
    )

};

export default UsersItem;