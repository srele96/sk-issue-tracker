import { BsArrowRightShort } from 'react-icons/bs';
import { status } from '../util';
import { Collections } from '../models';
import { useCollectionOnce } from '../hooks';
import {
  UsersContainer,
  Bordered,
  H1,
  UserList,
  UserItem,
  Message,
  UserLink,
} from './UsersStyles';

export const Users = () => {
  const [users, usersStatus] = useCollectionOnce(Collections.Users);

  const usersJSX = () => {
    return users.length === 0 ? (
      <Message>No users to show.</Message>
    ) : (
      users.map((u) => (
        <UserItem key={u.user_id}>
          <UserLink to={`/users/${u.user_id}`}>
            {u.displayName}
            <BsArrowRightShort />
          </UserLink>
        </UserItem>
      ))
    );
  };

  const renderUsers = () => {
    if (usersStatus === status.pending) {
      return <Message>Loading...</Message>;
    } else if (usersStatus === status.error) {
      return <Message>Error! Couldn't get User List</Message>;
    } else if (usersStatus === status.complete) {
      return usersJSX();
    }
  };

  return (
    <main>
      <UsersContainer>
        <Bordered>
          <H1>User list</H1>
          <UserList>{renderUsers()}</UserList>
        </Bordered>
      </UsersContainer>
    </main>
  );
};
