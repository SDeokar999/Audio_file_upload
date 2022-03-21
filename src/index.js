import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import music from './music.png';
ReactDOM.render(
  <React.StrictMode>
  <div style={{backgroundImage:`url(${music})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"700px",color:"white",width:"100%"}}>
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
