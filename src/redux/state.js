import React from 'react';
import ReactDOM from 'react-dom';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import reduserDialog from './reduserDialog';
import reduserProfile from './reduserProfile';

const ADD_POST = 'ADD-POST';
const AREA_CHANGE = 'AREA-CHANGE';
const GET_NEW_POST_TEXT = 'GET-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSSAGE = 'SEND_MESSSAGE';

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, content: "How are you?", likes_count: 12 },
        { id: 2, content: "Good Day", likes_count: 92 },
        { id: 3, content: "I am Andy", likes_count: 422 },
        { id: 4, content: "I am Peter", likes_count: 162 }
      ],
      newPostText: 'Hello, User'
    },

    dialogPage: {
      dialogData: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Vasya" },
        { id: 3, name: "Petya" },
        { id: 4, name: "Victor" },
        { id: 5, name: "Valera" }
      ],

      messageData: [
        { id: 1, content: ["Hi", "Eraa"] },
        { id: 2, content: ["Wow", "Riif"] },
        { id: 3, content: ["Feeaf", "Iriska"] },
        { id: 4, content: ["Meean", "Rest"] },
      ],
      newMessageText: ''
    }


  },

  getState() {
    return this._state;
  },

  getNewPostText() {
    return this._state.profilePage.newPostText;
  },
    
  
  addPostAction() {
    return { type: ADD_POST };
  },

  onPostChangeAction(text) {
    return { type: AREA_CHANGE, text: text };
  },

  sendMessage() {
    return { type: SEND_MESSSAGE };
  },

  updateNewMessage(newText) {
    return { type: UPDATE_NEW_MESSAGE_TEXT , text: newText };
  },

  dispatch(action) {
    this._state = reduserProfile (this._state, action);
    rerends (this._state);
  }


}

let rerends = () => {

}

export const subscribe = (observer) => {
  rerends = observer;
}

// export let addPost = () => {
//   let NewPost = {
//     id: 5,
//     content: state.profilePage.newPostText,
//     likes_count: 0
//   }
//   state.profilePage.postData.push(NewPost);
//   state.profilePage.newPostText = "";
//   rerends(state);
// }

// export let postTextAreaChange = (text) => {
//   state.profilePage.newPostText = text;
//   rerends(state);
// }



export default store;