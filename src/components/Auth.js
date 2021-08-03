import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../util';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
  // We will display Google as auth provider.
  signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
};

export const Auth = () => (
  <StyledFirebaseAuth firebaseAuth={auth()} uiConfig={uiConfig} />
);
