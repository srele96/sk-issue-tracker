import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { userSelector } from '../../redux/slice';

const Authenticated = (props) => {
  const user = useSelector(userSelector);
  const { redirectPath } = props;

  return user ? <Route {...props} /> : <Redirect to={redirectPath} />;
};

Authenticated.propTypes = {
  redirectPath: PropTypes.string.isRequired,
};

export { Authenticated };
