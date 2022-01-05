import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { sendMessage, updateNewMessage } from '../../redux/reduserDialog';
import Dialogs from './Dialogs';


// let nameId = 3;

// let dialogsElements = (dataD) =>  dataD.map (dElement => <DialogItem name={dElement.name} id={dElement.id} />);

// let messageElements = (dataM) => dataM.map (mElement => <MessageItem message={mElement.content} />)

// let messageUser = (dataM ,Id) => (<MessageItem message={dataM[nameId].content}/>);
// let isActiveBut;
// let dialogsElements = (dataD, isActiveBut) =>  dataD.map (dElement => <DialogItem active={isActiveBut} name={dElement.name} id={dElement.id} />);

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer > 
//             {(store) => {

//             let addMessage = () => {
//                 store.dispatch(sendMessage());
//                 // textAreaText.current.value ='';
//             }

//             let onTextChange = (text) => {
//                 // let textMessage = textAreaText.current.value;
//                 store.dispatch(updateNewMessage(text));
//             }

//             return <Dialogs state={store.getState()} sendMessage={addMessage} updateNewMessage={onTextChange} />;
//         }
//         }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        state: state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessage());
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessage(text));
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;