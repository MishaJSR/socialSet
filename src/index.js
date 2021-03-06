import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// let renderTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
          <Provider store={store}>
          <App />
          </Provider>
          </BrowserRouter>,
        document.getElementById('root')
      );
// } 

// renderTree (store.getState());

// store.subscribe (() => {
//   let state = store.getState();
//   renderTree(state);
// });
// store.subscribe (renderTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
