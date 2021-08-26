import PropTypes from 'prop-types';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Collections } from '../models';
import { firestore } from '../util';
import {
  Message,
  Container,
  List,
  ListItem,
  ListItemHeader,
  ListItemBody,
  ListLink,
} from './IssueComments-Styles';

const IssueComments = ({ issue_id }) => {
  const query = firestore()
    .collection(Collections.Comments)
    .where('issue_id', '==', issue_id)
    .orderBy('created', 'asc')
    .limit(25);
  const [data, loading, error] = useCollectionData(query);

  const renderComments = () => {
    return data.map((comment) => (
      <ListItem key={comment.comment_id}>
        <ListItemHeader>
          <ListLink to={`/users/${comment.user_id}`}>
            {comment.displayName}
          </ListLink>
          <span>commented</span>
        </ListItemHeader>
        <ListItemBody>{comment.content}</ListItemBody>
      </ListItem>
    ));
  };

  const render = () => {
    if (loading) return <Message>Loading...</Message>;
    else if (error) {
      return (
        <Message>
          <h1>Error! Couldn't get comments.</h1>
        </Message>
      );
    } else if (data.length === 0) {
      return <Message>No comments on this Issue.</Message>;
    }

    return <List>{renderComments()}</List>;
  };

  return <Container>{render()}</Container>;
};

IssueComments.propTypes = {
  issue_id: PropTypes.string.isRequired,
};

export { IssueComments };
