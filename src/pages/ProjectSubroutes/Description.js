import PropTypes from 'prop-types';
import styled from 'styled-components';

const DescriptionH3 = styled.h3`
  padding-bottom: 8px;
  color: var(--emphasized_teal);
`;

const Description = ({ project }) => (
  <div>
    <DescriptionH3>Description</DescriptionH3>
    <div>{project.description}</div>
  </div>
);

Description.propTypes = {
  project: PropTypes.object.isRequired,
};

export { Description };
