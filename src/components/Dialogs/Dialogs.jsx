import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/MessageItem'

const Dialogs = (props) => {

    let textAreaText = React.createRef();

    let addMessage = () => {
        props.sendMessage();
        textAreaText.current.value ='';
    }

    let onTextChange = () => {
        let textMessage = textAreaText.current.value;
        props.updateNewMessage(textMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {props.state.dialogPage.dialogData.map (dElement => <DialogItem name={dElement.name} id={dElement.id} />)}
            </div>
            <div className={classes.messages}>
                {props.state.dialogPage.messageData.map (mElement => <MessageItem message={mElement.content} />)}
                <textarea name="" ref={textAreaText} onChange={onTextChange} cols="30" rows="10"></textarea>
                <button onClick={addMessage}>Написать</button>
            </div>
            
        </div>
    );
    debugger;
}

export default Dialogs;