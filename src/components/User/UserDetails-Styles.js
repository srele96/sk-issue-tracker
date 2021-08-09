import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const H4 = styled.h4`
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--light);
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid var(--light);
  color: var(--light);
  padding: 8px 16px;
  margin-top: 8px;
  & svg {
    margin-left: 8px;
  }
`;
