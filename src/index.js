import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData  = [
  {id: 1, content : "How are you?", likes_count : 12},
  {id: 2, content : "Its my new post", likes_count : 92},
  {id: 3, content : "I am Andy", likes_count : 422},
  {id: 4, content : "I am Peter", likes_count : 162}
]

let dialogData = [
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

ReactDOM.render(
  <React.StrictMode>
    <App  postData = {postData} dialogData = {dialogData} messageData = {messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
