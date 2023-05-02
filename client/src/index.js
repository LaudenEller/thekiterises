import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './fonts/lulo-clean-w01-one-bold.ttf'
import './css/styles.module.css'

// Q: what is happening with .createRoot and with .StrictMode?

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


