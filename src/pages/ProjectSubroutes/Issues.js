import PropTypes from 'prop-types';
import { useRouteMatch, Switch, useLocation } from 'react-router-dom';
import { Public } from '../../components/RouteComponents';
import { IssueList } from './IssueList';
import { Issue } from './Issue';
import { List, ListItem, ListLink } from './Issues-Styles';

const Issues = ({ project }) => {
  const { pathname } = useLocation();
  const { url, path } = useRouteMatch();

  return (
    <div>
      {/* Links are hidden when specific issue is opened. */}
      {(pathname === `${url}/open` || pathname === `${url}/closed`) && (
        <List>
          <ListItem isOpen={pathname === `${url}/open`}>
            <ListLink to={`${url}/open`}>Open</ListLink>
          </ListItem>
          <ListItem isOpen={pathname === `${url}/closed`}>
            <ListLink to={`${url}/closed`}>Closed</ListLink>
          </ListItem>
        </List>
      )}

      <div>
        <Switch>
          <Public exact path={`${path}/open`}>
            <IssueList url={url} project={project} isOpen={true} />
          </Public>

          <Public exact path={`${path}/closed`}>
            <IssueList url={url} project={project} isOpen={false} />
          </Public>

          <Public path={`${path}/:issue_id`}>
            <Issue projectOwnerId={project.user_id} />
          </Public>
        </Switch>
      </div>
    </div>
  );
};

Issues.propTypes = {
  project: PropTypes.object.isRequired,
};

export { Issues };
