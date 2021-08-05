import { SignOut } from './SignOut';
import { H4 } from './UserDetailsStyles';

export const UserDetail = ({ user }) => (
  <>
    <H4>My Details</H4>
    <div>
      E-mail:
      <br />
      {user.email}
    </div>
    <SignOut />
  </>
);
