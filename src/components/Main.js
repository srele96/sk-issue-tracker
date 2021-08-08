import { useHistory, useLocation } from 'react-router';
import { BsArrowLeft } from 'react-icons/bs';
import { Button, ButtonWrapper } from './Main-Styles';

export const Main = ({ children }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  // Back button is visible on pages that are not index '/' page.
  return (
    <main>
      {pathname !== '/' && (
        <ButtonWrapper>
          <Button onClick={history.goBack}>
            <BsArrowLeft />
            <span>Back</span>
          </Button>
        </ButtonWrapper>
      )}
      {children}
    </main>
  );
};
