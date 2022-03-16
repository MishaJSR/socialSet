import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { sendMessage, updateNewMessage } from '../../redux/reduserDialog';
import Dialogs from './Dialogs';
import { Navigate } from 'react-router';
import { IsAuthHoc } from '../../scripts/hocIsAuth';
import { compose } from 'redux';

class DialogsContainer extends React.Component{
    componentDidMount() {
        
    }

    render(){
        return <Dialogs {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default compose(connect (mapStateToProps, {sendMessage, updateNewMessage}),
   IsAuthHoc) 
   (DialogsContainer)
