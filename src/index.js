import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDl_rdlDx_U4kPme8t4JFIAl8VXQs3fFOU",
  authDomain: "smoon-store.firebaseapp.com",
  projectId: "smoon-store",
  storageBucket: "smoon-store.appspot.com",
  messagingSenderId: "669184084992",
  appId: "1:669184084992:web:14ac3ea50d9a9c3daadce5"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>*/
  <App />
  /*</React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
