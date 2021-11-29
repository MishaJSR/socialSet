import React from 'react';
import ReactDOM from 'react-dom';

let state = {
  profilePage: {
    postData: [
      { id: 1, content: "How are you?", likes_count: 12 },
      { id: 2, content: "Its my new post", likes_count: 92 },
      { id: 3, content: "I am Andy", likes_count: 422 },
      { id: 4, content: "I am Peter", likes_count: 162 }
    ]
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
    ]
  }

}

export default state;