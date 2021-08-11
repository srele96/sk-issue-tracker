import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  border-radius: 6px;
  border: 1px solid var(--light_transparent);
`;

export const SubroutesNavList = styled.ul`
  display: flex;
  border-bottom: 1px solid var(--light_transparent);
`;

export const SubroutesNavItem = styled.li`
  display: flex;
`;

export const SubroutesNavLink = styled(Link)`
  color: var(--light);
  text-decoration: none;
  display: flex;
  padding: 16px;
  transition: color 0.3s ease;
  &:hover {
    color: var(--emphasized_teal);
  }
`;

export const Body = styled.div`
  padding: 16px;
`;
