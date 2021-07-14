// must be imported first, before anything else
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

// get references to omit firebase.auth, firebase.firestore... usage later
// references are required because in some parts of code we want to use
// firebase.auth, while in others firebase.auth()
// if i did `const auth = firebase.auth()`
// `auth` would be same as `firebase.auth()` instead of
// `auth` being equal to `firebase.auth`
const auth = firebase.auth;
const firestore = firebase.firestore;
const initializeApp = firebase.initializeApp;

initializeApp(firebaseConfig);

// while in development, hit emulators
// make sure emulators are running in parallel with app
if (window.location.hostname === 'localhost') {
  // authentication emulator
  auth().useEmulator('http://localhost:9099');
  // firestore emulator
  firestore().useEmulator('localhost', 8080);
}

// allow usage of auth and firestore outside
export { auth, firestore };