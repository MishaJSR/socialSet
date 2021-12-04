import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { addPost, postTextAreaChange, subscribe } from './redux/state';
import App from './App';

export let renderTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
          <App  statePostData = {props.profilePage} stateDialogData = {props.dialogPage} stateMessageData = {props.dialogPage} addPost={addPost} postTextAreaChange={postTextAreaChange}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
} 

renderTree (state);
subscribe (renderTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
