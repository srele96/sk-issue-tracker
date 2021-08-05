import {
  StyledH1,
  Wrap,
  WrapLeft,
  WrapRight,
  Row,
  StypedP,
  CreateProject,
  BrowseProjects,
} from './HomeStyles';

export const Home = () => {
  return (
    <main>
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
            <CreateProject>Create Project</CreateProject>
          </Row>
          <Row>
            <StypedP>
              <span>Looking to contribute?</span>
            </StypedP>
            <BrowseProjects>Browse Projects</BrowseProjects>
          </Row>
        </WrapRight>
      </Wrap>
    </main>
  );
};
