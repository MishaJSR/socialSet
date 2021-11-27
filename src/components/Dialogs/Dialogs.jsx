import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/MessageItem'

let dialogsData = [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Petya" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Valera" }
]

let messageData = [
    { id: 1, content: ["Hi", "Eraa"] },
    { id: 2, content:  ["Wow", "Riif"] },
    { id: 3, content: ["Feeaf", "Iriska"]  },
    { id: 4, content: ["Meean", "Rest"] },
]

let nameId = 3;

let dialogsElements =  dialogsData.map (dElement => <DialogItem name={dElement.name} id={dElement.id} />);

let messageElements = messageData.map (mElement => <MessageItem message={mElement.content} />)

let messageUser = (nameId) => (<MessageItem message={messageData[nameId].content}/>);

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {/* {messageUser (nameId)} */}
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;