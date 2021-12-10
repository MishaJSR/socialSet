import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, { subscribe } from './redux/state';
import App from './App';

export let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App  state = {state} dispatch={store.dispatch.bind(store)} addPostAction={store.addPostAction.bind(store)} onPostChangeAction={store.onPostChangeAction.bind(store)} getNewPostText={store.getNewPostText.bind(store)} updateNewMessage={store.updateNewMessage.bind(store)} sendMessage={store.sendMessage.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
} 

renderTree (store.getState());
subscribe (renderTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
