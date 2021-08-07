import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { userSelector } from '../../redux/slice';

const NotAuthenticated = (props) => {
  const user = useSelector(userSelector);
  const { redirectPath } = props;

  return !user ? <Route {...props} /> : <Redirect to={redirectPath} />;
};

NotAuthenticated.propTypes = {
  redirectPath: PropTypes.string.isRequired,
};

export { NotAuthenticated };
