import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../firebase/firebase';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
  // We will display Google as auth provider.
  signInOptions: [
    auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}

const Auth = () => (
  <StyledFirebaseAuth firebaseAuth={auth()} uiConfig={uiConfig} />
);

export default Auth;