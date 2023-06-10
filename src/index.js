import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home';

//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
