import { useParams } from 'react-router-dom';
import { IssueComments } from '../../components/IssueComments';
import { CommentEditor } from '../../components/CommentEditor';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { Collections } from '../../models';
import { firestore } from '../../util';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/slice';
import { H1, Card, CardHeader, CardBody, UserLink } from './Issue-Styles';

export const Issue = () => {
  const user = useSelector(userSelector);
  const { issue_id } = useParams();
  const query = firestore().collection(Collections.Issues).doc(issue_id);
  const [data, loading, error] = useDocumentDataOnce(query);

  if (loading) return <div>Loading...</div>;
  else if (error) {
    return (
      <div>
        <h1>Error! Couldn't get issue!</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <H1>{data.title}</H1>
      </div>

      <Card>
        <CardHeader>
          <UserLink to={`/users/${data.user_id}`}>{data.displayName}</UserLink>
          <span>opened issue</span>
        </CardHeader>

        <CardBody>{data.description}</CardBody>
      </Card>

      <div>
        <IssueComments issue_id={issue_id} />
      </div>

      {user && (
        <div>
          <CommentEditor issue_id={issue_id} />
        </div>
      )}
    </div>
  );
};
