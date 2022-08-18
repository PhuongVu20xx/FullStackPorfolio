import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
var showTime = setInterval(function () {
  var date = new Date().toLocaleDateString("en-ZA");
  var time = new Date().toLocaleTimeString();
  var myElement = date + " " + time;
  if (document.getElementById("current-time") == null) {
    return;
  }
  document.getElementById("current-time").innerHTML = myElement;
}, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LandingPage />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
