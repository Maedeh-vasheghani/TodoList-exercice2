import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './Component/Title';
import reportWebVitals from './reportWebVitals';
import Paragraphe from './Component/Paragraphe';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Title time={2}/>
    <Paragraphe txt={'You Can Add Here Everything That You Want to do '} /> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
