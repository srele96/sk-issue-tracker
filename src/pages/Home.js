import { routes } from '../routes';
import { Main } from '../components/Main';
import {
  StyledH1,
  Wrap,
  WrapLeft,
  WrapRight,
  Row,
  StypedP,
  CreateProject,
  BrowseProjects,
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
              <span>Need Issue Tracker?</span>
            </StypedP>
            <CreateProject to={routes.createProject}>
              Create Project
            </CreateProject>
          </Row>
          <Row>
            <StypedP>
              <span>Looking to contribute?</span>
            </StypedP>
            <BrowseProjects>Browse Projects</BrowseProjects>
          </Row>
        </WrapRight>
      </Wrap>
    </Main>
  );
};
