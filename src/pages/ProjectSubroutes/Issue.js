import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { CommentEditor } from '../../components/CommentEditor';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { Collections } from '../../models';
import { firestore } from '../../util';

const H1 = styled.h1`
  color: var(--emphasized_teal);
  padding-bottom: 16px;
`;

export const Issue = () => {
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
      <div>{data.description}</div>
      <div>
        <CommentEditor issue_id={issue_id} />
      </div>
    </div>
  );
};
