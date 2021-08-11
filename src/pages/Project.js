import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router';
import { firestore } from '../util';
import { Collections } from '../models';
import { Main } from '../components/Main';
import { ProjectSubroutes } from './ProjectSubroutes';
import { Container, Header, StyledLink, DivMessage } from './Project-Styles';

export const Project = () => {
  const { user_id, project_id } = useParams();
  const queryProject = firestore()
    .collection(Collections.Projects)
    .doc(project_id);
  const [project, isProjectLoading, projectError] =
    useDocumentDataOnce(queryProject);
  const queryUser = firestore().collection(Collections.Users).doc(user_id);
  const [user, isUserLoading, userError] = useDocumentDataOnce(queryUser);

  if (isProjectLoading || isUserLoading)
    return (
      <Main>
        <Container>
          <DivMessage>Loading...</DivMessage>
        </Container>
      </Main>
    );
  if (userError || projectError)
    return (
      <Main>
        <Container>
          <DivMessage>
            <h1>Error! Couldn't get project.</h1>
          </DivMessage>
        </Container>
      </Main>
    );
  // Incorrect user or project id will result in null result.
  if (!user || !project)
    return (
      <Main>
        <Container>
          <DivMessage>
            <h1>Not found!</h1>
          </DivMessage>
        </Container>
      </Main>
    );
  // Check if fetched user is who created project.
  if (user.user_id !== project.user_id)
    return (
      <Main>
        <Container>
          <DivMessage>
            <h1>Not found!</h1>
          </DivMessage>
        </Container>
      </Main>
    );

  return (
    <Main>
      <Container>
        <Header>
          <StyledLink to={`/users/${user.user_id}`}>
            {user.displayName}
          </StyledLink>
          {' / '}
          <StyledLink
            to={`/users/${user.user_id}/project/${project.project_id}`}
          >
            {project.title}
          </StyledLink>
        </Header>

        <ProjectSubroutes project={project} />
      </Container>
    </Main>
  );
};
