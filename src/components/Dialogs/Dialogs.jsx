import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/MessageItem'





// let nameId = 3;

let dialogsElements = (dataD) =>  dataD.map (dElement => <DialogItem name={dElement.name} id={dElement.id} />);

let messageElements = (dataM) => dataM.map (mElement => <MessageItem message={mElement.content} />)

// let messageUser = (nameId) => (<MessageItem message={messageData[nameId].content}/>);

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements(props.dialogData)}
            </div>
            <div className={classes.messages}>
                {/* {messageUser (nameId)} */}
                {messageElements(props.messageData)}
            </div>
        </div>
    );
}

export default Dialogs;