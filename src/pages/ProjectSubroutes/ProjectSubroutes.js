import PropTypes from 'prop-types';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Public, Authenticated } from '../../components/RouteComponents';
import { Description } from './Description';
import { CreateIssue } from './CreateIssue';
import { Issues } from './Issues';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/slice';
import {
  Container,
  SubroutesNavList,
  SubroutesNavItem,
  SubroutesNavLink,
  Body,
} from './ProjectSubroutes-Styles';

const ProjectSubroutes = ({ project }) => {
  const user = useSelector(userSelector);
  const { path, url } = useRouteMatch();

  return (
    <Container>
      <SubroutesNavList>
        <SubroutesNavItem>
          <SubroutesNavLink to={`${url}`}>Description</SubroutesNavLink>
        </SubroutesNavItem>

        <SubroutesNavItem>
          <SubroutesNavLink to={`${url}/issues/open`}>Issues</SubroutesNavLink>
        </SubroutesNavItem>

        {user && (
          <SubroutesNavItem>
            <SubroutesNavLink to={`${url}/create-issue`}>
              Create Issue
            </SubroutesNavLink>
          </SubroutesNavItem>
        )}
      </SubroutesNavList>

      <Body>
        <Switch>
          <Public path={`${path}/issues`}>
            <Issues project={project} />
          </Public>

          <Authenticated redirectPath={`${url}`} path={`${path}/create-issue`}>
            <CreateIssue project={project} />
          </Authenticated>

          <Public exact path={path}>
            <Description project={project} />
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
