import { useState } from 'react';
import { Container, Error, Button } from './ModifyIssueStatus-Styles';

export const ModifyIssueStatus = ({ isOpen, query }) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handleModifyIssuestatus = () => {
    setPending(true);
    query
      .update({ isOpen: !isOpen })
      .then(
        // Successufully changed status
        () => {
          setError(false);
        },
        // Error occured
        () => {
          setError(true);
        }
      )
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <Container>
      {error && <Error>Error! Couldn't change status.</Error>}
      <Button
        isOpen={isOpen}
        disabled={pending}
        onClick={handleModifyIssuestatus}
      >
        <b>{isOpen ? 'Close Issue' : 'Open Issue'}</b>
      </Button>
    </Container>
  );
};
