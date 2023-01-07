// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Main from "./Main";
import AddPatient from "./AddPatient"
import AddStudy from "./AddStudy";
import Patient from "./Patient"
import "./index.css";
import AllPatients from "./AllPatients";
 
ReactDOM.render(
  <Login/>, 
  document.getElementById("root")
);