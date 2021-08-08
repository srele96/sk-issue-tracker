import { auth } from '../../util';
import { Button } from './SignOut-Styles';

const SignOut = () => (
  <Button onClick={() => auth().signOut()}>Sign Out</Button>
);

export { SignOut };
