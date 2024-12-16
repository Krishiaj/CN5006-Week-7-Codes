import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import EmojeeCounter from './EmojeeCounters';
import HookControlledButtonState from './Counter';
import EmotionDisplay from "./EmotionDisplay";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <EmotionDisplay />
    <HookControlledButtonState/>
    <EmojeeCounter pic="Love"/>
    <EmojeeCounter pic="Like"/>
    <EmojeeCounter pic="sad"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
