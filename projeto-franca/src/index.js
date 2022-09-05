import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Topo from './pages/js/Topo';
import Video from './pages/js/Video'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topo />
    <Video />
      
    <App />
  </React.StrictMode>
);


reportWebVitals();
