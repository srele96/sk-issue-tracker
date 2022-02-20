/**
 * TODO:
 * - Check if it is fine for this token to be publically visible
 *     * Firebase offers whitelisting domains which can access
 *       service which means it should be safe to expose this
 *       token, because it is unique.
 * - Add a way to get the firebase config from the server
 * - Check if i can pass firebase config from .env
 * - Check if hosting platform provides a way to provide firebase config
 */
export const firebaseConfig = {
  apiKey: 'AIzaSyD-huypvnv0M8Fuj_junWGrKivvPfwCedc',
  authDomain: 'react-redux-login-73997.firebaseapp.com',
  projectId: 'react-redux-login-73997',
  storageBucket: 'react-redux-login-73997.appspot.com',
  messagingSenderId: '952425451467',
  appId: '1:952425451467:web:ab04c2c3152dda40df704e',
};
