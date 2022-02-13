import firebase from 'firebase/app';
import 'firebase/firestore';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'fire-collection.firebaseapp.com',
  projectId: 'fire-collection',
  storageBucket: 'fire-collection.appspot.com',
  messagingSenderId: '739587217079',
  appId: '1:739587217079:web:f0fe5461be539298f8df32',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service

const db = firebase.firestore();

// auth
const userAuth = firebase.auth();

export { db, userAuth };
