import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/storage';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const firebaseConfig = {
  apiKey: 'AIzaSyDDmQ-H4KcJfcElGPoiZPskmkaTc9NfzuI',
  authDomain: 'famous-poet.firebaseapp.com',
  databaseURL: 'https://famous-poet.firebaseio.com',
  projectId: 'famous-poet',
  storageBucket: 'famous-poet.appspot.com',
  messagingSenderId: '999927642397',
  appId: '1:999927642397:web:085875dc215b14b28789f4',
  measurementId: 'G-3E2WPN3REZ',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'),
);
