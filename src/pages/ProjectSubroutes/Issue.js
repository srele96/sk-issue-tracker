import { useParams } from 'react-router-dom';
import { IssueComments } from '../../components/IssueComments';
import { CommentEditor } from '../../components/CommentEditor';
import { ModifyIssueStatus } from '../../components/ModifyIssueStatus';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { Collections } from '../../models';
import { firestore } from '../../util';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/slice';
import { FaRegDotCircle, FaRegCheckCircle } from 'react-icons/fa';
import {
  H1,
  IssueStatus,
  Card,
  CardHeader,
  CardBody,
  UserLink,
} from './Issue-Styles';

export const Issue = ({ projectOwnerId }) => {
  const user = useSelector(userSelector);
  const { issue_id } = useParams();
  const query = firestore().collection(Collections.Issues).doc(issue_id);
  const [data, loading, error] = useDocumentData(query);

  if (loading) return <div>Loading...</div>;

  if (error) {
    return (
      <div>
        <h1>Error! Couldn't get issue!</h1>
      </div>
    );
  }

  if (data) {
    return (
      <div>
        {projectOwnerId === user?.uid && (
          <ModifyIssueStatus isOpen={data.isOpen} query={query} />
        )}

        <div>
          <H1>{data.title}</H1>
        </div>

        <div>
          <IssueStatus isOpen={data.isOpen}>
            {data.isOpen ? <FaRegDotCircle /> : <FaRegCheckCircle />}
            {data.isOpen ? 'Open' : 'Closed'}
          </IssueStatus>
        </div>

        <Card>
          <CardHeader>
            <UserLink to={`/users/${data.user_id}`}>
              {data.displayName}
            </UserLink>
            <span>opened issue</span>
          </CardHeader>

          <CardBody>{data.description}</CardBody>
        </Card>

        <div>
          <IssueComments issue_id={issue_id} />
        </div>

        {user && data.isOpen && (
          <div>
            <CommentEditor issue_id={issue_id} />
          </div>
        )}
      </div>
    );
  }

  return <h2>Not found!</h2>;
};
