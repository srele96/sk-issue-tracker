import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 16px;
  max-width: 720px;
  margin: 0 auto;
`;

export const Header = styled.div`
  padding-bottom: 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--emphasized_teal);
`;

export const DivMessage = styled.div`
  text-align: center;
`;
