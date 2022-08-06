import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import { store } from "./Redux/Store/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    </Provider>

=======
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
>>>>>>> 0a3385fe1ad62ae580da894711f9ad167765883f
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
