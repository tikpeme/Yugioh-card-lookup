import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App style={{width: "100%"}}></App>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


