import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { sendMessage, updateNewMessage } from '../../redux/reduserDialog';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        state: state,
        isAuth: state.auth.isAuth
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