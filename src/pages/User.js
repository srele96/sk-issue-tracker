import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Collections } from '../models';
import { useDocumentOnce } from '../hooks';
import { status } from '../util';
import { userSelector } from '../redux/slice';
import { routes } from '../routes';
import { BsPlusCircle } from 'react-icons/bs';
import { Main } from '../components/Main';
import { ProjectList } from '../components/ProjectList';
import {
  UserWrapper,
  UserContainer,
  H1,
  Emp,
  UserHeader,
  UserProjects,
  CreateProject,
} from './User-Styles';

const ProfileHeader = ({ children }) => (
  <UserHeader>
    <H1>{children}</H1>
  </UserHeader>
);

export const User = () => {
  const user = useSelector(userSelector);
  const { user_id } = useParams();
  const [data, loadingStatus] = useDocumentOnce(Collections.Users, user_id);

  const renderUser = () => {
    if (data) {
      return (
        <>
          <ProfileHeader>
            <Emp>{data.displayName}</Emp>'s Profile
          </ProfileHeader>
          <UserProjects>
            {user?.uid === data.user_id && (
              <CreateProject to={routes.createProject}>
                <span>Create Project</span>
                <BsPlusCircle />
              </CreateProject>
            )}

            <ProjectList user={data} />
          </UserProjects>
        </>
      );
    }

    return <ProfileHeader>User not found.</ProfileHeader>;
  };

  const conditionallyRenderUser = () => {
    if (loadingStatus === status.pending) {
      return <ProfileHeader>Loading...</ProfileHeader>;
    } else if (loadingStatus === status.error) {
      return <ProfileHeader>Error! Couldn't get user.</ProfileHeader>;
    } else if (loadingStatus === status.complete) {
      return renderUser();
    }
  };

  return (
    <Main>
      <UserWrapper>
        <UserContainer>{conditionallyRenderUser()}</UserContainer>
      </UserWrapper>
    </Main>
  );
};
