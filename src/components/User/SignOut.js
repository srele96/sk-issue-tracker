import { auth } from '../../util';
import { Button } from './SignOutStyles';

const SignOut = () => (
  <Button onClick={() => auth().signOut()}>Sign Out</Button>
);

export { SignOut };
