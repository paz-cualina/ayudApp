import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd5NmLqf490UlZWKkE9hu1A-gS_xzA8i0",
  authDomain: "ayudapp-ffcdb.firebaseapp.com",
  projectId: "ayudapp-ffcdb",
  storageBucket: "ayudapp-ffcdb.appspot.com",
  messagingSenderId: "661148656304",
  appId: "1:661148656304:web:199cfd97c9fb0402991175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
