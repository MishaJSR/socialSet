import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (<NavLink to={"/dialogs/" + props.id} className={navData => navData.isActive ? classes.active : classes.dialogs_items}>{props.name}</NavLink>)
}

const MessageTtem = (props) => {
    return (<div className={classes.message}>{props.message}</div>)
}

let dialogsElements = () => {
    return (
        <div>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name="Vasya" id="2" />
            <DialogItem name="Petya" id="3" />
            <DialogItem name="Victor" id="4" />
            <DialogItem name="Valera" id="5" />
        </div>
    )
}


let dialogsData = [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Petya" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Valera" }
]

let messageData = [
    { id: 1, content: "Hi" },
    { id: 2, content: "Yo" },
    { id: 3, content: "Wifi" },
    { id: 4, content: "YEEA" },
]


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements()}
            </div>
            <div className={classes.messages}>
                <MessageTtem message={messageData[0].content} />
                <MessageTtem message={messageData[1].content} />
                <MessageTtem message={messageData[3].content} />

            </div>
        </div>
    );
}

export default Dialogs;