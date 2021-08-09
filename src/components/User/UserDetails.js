import { SignOut } from './SignOut';
import { StyledLink } from './UserDetails-Styles';
import { BsPlusCircle } from 'react-icons/bs';
import { routes } from '../../routes';

export const UserDetail = ({ user, closeDropdown }) => (
  <>
    <StyledLink onClick={closeDropdown} to={`/users/${user.uid}`}>
      Visit My Profile
    </StyledLink>
    <StyledLink onClick={closeDropdown} to={routes.createProject}>
      <span>Create Project</span>
      <BsPlusCircle />
    </StyledLink>
    <SignOut />
  </>
);
