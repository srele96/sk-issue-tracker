// must be imported first, before anything else
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

const auth = firebase.auth;
const firestore = firebase.firestore;
const initializeApp = firebase.initializeApp;

initializeApp(firebaseConfig);

// While in development, hit emulators.
if (window.location.hostname === 'localhost') {
  // authentication emulator
  auth().useEmulator('http://localhost:9099');
  // firestore emulator
  firestore().useEmulator('localhost', 8080);
}

export { auth, firestore };
