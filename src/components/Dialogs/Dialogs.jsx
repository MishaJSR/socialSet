import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/MessageItem'


// let nameId = 3;

let dialogsElements = (dataD) =>  dataD.map (dElement => <DialogItem name={dElement.name} id={dElement.id} />);

let messageElements = (dataM) => dataM.map (mElement => <MessageItem message={mElement.content} />)

// let messageUser = (dataM ,Id) => (<MessageItem message={dataM[nameId].content}/>);
// let isActiveBut;
// let dialogsElements = (dataD, isActiveBut) =>  dataD.map (dElement => <DialogItem active={isActiveBut} name={dElement.name} id={dElement.id} />);

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
                {dialogsElements(props.state.dialogPage.dialogData)}
            </div>
            <div className={classes.messages}>
                {/* {messageUser (props.messageData, nameId)} */}
                {messageElements(props.state.dialogPage.messageData)}
                
                <textarea name="" ref={textAreaText} onChange={onTextChange} cols="30" rows="10"></textarea>
                <button onClick={addMessage}>Написать</button>
            </div>
            
        </div>
    );
    debugger;
}

export default Dialogs;