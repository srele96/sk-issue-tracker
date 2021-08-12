import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { Collections } from '../models';
import { firestore } from '../util';
import {
  DivMessage,
  Container,
  List,
  ListItem,
  ListLink,
} from './IssuesList-Styles';

export const IssueList = ({ project, isOpen, url }) => {
  const query = firestore()
    .collection(Collections.Issues)
    .where('project_id', '==', project.project_id)
    .where('isOpen', '==', isOpen)
    .limit(25);
  const [issues, loading, error] = useCollectionDataOnce(query);

  if (loading) {
    return (
      <Container>
        <DivMessage>Loading...</DivMessage>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <DivMessage>
          <h2>Error! Couldn't get Issues!</h2>
        </DivMessage>
      </Container>
    );
  }

  return (
    <Container>
      {issues.length === 0 ? (
        <DivMessage>No Issues to show.</DivMessage>
      ) : (
        <List>
          {issues.map((issue) => (
            <ListItem key={issue.issue_id}>
              <ListLink to={`${url}/${issue.issue_id}`}>{issue.title}</ListLink>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};
