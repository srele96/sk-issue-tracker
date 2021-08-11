import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Public } from '../../components/RouteComponents';
import { Description } from './Description';
import {
  Container,
  SubroutesNavList,
  SubroutesNavItem,
  SubroutesNavLink,
  Body,
} from './ProjectSubroutes-Styles';

const ProjectSubroutes = ({ project }) => {
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <SubroutesNavList>
        <SubroutesNavItem>
          <SubroutesNavLink to={`${url}`}>Description</SubroutesNavLink>
        </SubroutesNavItem>
        <SubroutesNavItem>
          <SubroutesNavLink to={`${url}/issues`}>Issues</SubroutesNavLink>
        </SubroutesNavItem>
        <SubroutesNavItem>
          <SubroutesNavLink to={`${url}/create-issue`}>
            Create Issue
          </SubroutesNavLink>
        </SubroutesNavItem>
      </SubroutesNavList>

      <Body>
        <Switch>
          <Public>
            <Route path={`${path}/issues`}>
              <div>Issues</div>
            </Route>
            <Route path={`${path}/create-issue`}>
              <div>Create Issue</div>
            </Route>
            <Route exact path={path}>
              <Description project={project} />
            </Route>
          </Public>
        </Switch>
      </Body>
    </Container>
  );
};

ProjectSubroutes.propTypes = {
  project: PropTypes.object.isRequired,
};

export { ProjectSubroutes };
