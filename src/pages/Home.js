import { Main } from '../components/Main';
import {
  StyledH1,
  Wrap,
  WrapLeft,
  WrapRight,
  Row,
  StypedP,
} from './Home-Styles';

export const Home = () => {
  return (
    <Main>
      <Wrap>
        <WrapLeft>
          <StyledH1>
            <span>SK</span>
            <br />
            <span>Issue</span>
            <br />
            <span>Tracker</span>
          </StyledH1>
        </WrapLeft>

        <WrapRight>
          <Row>
            <StypedP>
              <span>Create Project and get issue reports from your users.</span>
            </StypedP>
            <br />
            <StypedP>
              <span>Sign In to get started.</span>
            </StypedP>
          </Row>
        </WrapRight>
      </Wrap>
    </Main>
  );
};
