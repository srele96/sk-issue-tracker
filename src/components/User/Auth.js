import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useLocation } from 'react-router-dom';
import { auth } from '../../util';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google as auth provider.
  signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
};

export const Auth = () => {
  // Determine what page user is in, if he try to sign in,
  // redirect him to page he tried to sign in from.
  const { pathname } = useLocation();
  uiConfig.signInSuccessUrl = pathname;

  return <StyledFirebaseAuth firebaseAuth={auth()} uiConfig={uiConfig} />;
};
