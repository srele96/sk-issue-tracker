import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { Collections } from '../models';
import { firestore } from '../util';
import {
  Container,
  DivMessage,
  H2,
  List,
  ListItem,
  ListLink,
} from './ProjectList-Styles';

export const ProjectList = ({ user }) => {
  const query = firestore()
    .collection(Collections.Projects)
    .where('user_id', '==', user.user_id)
    .limit(25);
  const [data, loading, error] = useCollectionDataOnce(query);

  const renderProjectList = () => {
    return (
      <List>
        {data.map((project) => (
          <ListItem key={project.project_id}>
            <ListLink
              to={`/users/${project.user_id}/project/${project.project_id}`}
            >
              {project.title}
            </ListLink>
          </ListItem>
        ))}
      </List>
    );
  };

  const renderProjects = () => {
    return data.length === 0 ? (
      <DivMessage>This user has no projects.</DivMessage>
    ) : (
      renderProjectList()
    );
  };

  if (error)
    return (
      <DivMessage>
        <h1>Error! Couldn't get projects.</h1>
      </DivMessage>
    );

  return (
    <Container>
      <H2>{user.displayName}'s Projects</H2>
      {loading ? (
        <DivMessage>Loading...</DivMessage>
      ) : (
        <div>{renderProjects()}</div>
      )}
    </Container>
  );
};
