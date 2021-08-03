import { useSelector } from 'react-redux';
import { userSelector } from '../redux/slice';

export const VisibleTo = ({ signedIn, signedOut, children }) => {
  const user = useSelector(userSelector);

  // Check if only one of the two props is passed (signedIn, signedOut).
  if (signedIn && signedOut) {
    // Both, signedIn and SignedOut were passed.
    return new Error(
      `Only one of props required in component VisibleTo. ` +
        'One of required props are: signedIn, signedOut'
    );
  } else if (!signedIn && !signedOut) {
    // Neither signedIn or signedOut were passed.
    return new Error(
      `One prop required in component VisibleTo. ` +
        'One of required props are: signedIn, signedOut'
    );
  }

  // VisibleTo is just visibility wrapper component and shouldn't
  // render additional jsx element around children.
  return (
    <>
      {user && signedIn && children}
      {!user && signedOut && children}
    </>
  );
};
