import firebase from 'firebase/app';
import 'firebase/firestore';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'my-money-95a5c.firebaseapp.com',
  projectId: 'my-money-95a5c',
  storageBucket: 'my-money-95a5c.appspot.com',
  messagingSenderId: '610303523893',
  appId: '1:610303523893:web:4bd1a9550e34e44bedc57c',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service

const db = firebase.firestore();

// auth
const userAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { db, userAuth, timestamp };
