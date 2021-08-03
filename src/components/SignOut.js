import PropTypes from 'prop-types';

const SignOut = ({ auth }) => (
  <button onClick={() => auth().signOut()}>Sign Out</button>
);

SignOut.propTypes = {
  auth: PropTypes.any.isRequired,
};

export { SignOut };
