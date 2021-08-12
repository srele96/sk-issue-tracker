import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivMessage = styled.div`
  padding: 8px 16px;
`;

export const Container = styled.div`
  border: 1px solid var(--light_transparent);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 16px 0px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ListLink = styled(Link)`
  color: var(--emphasized_teal);
  text-decoration: none;
  padding: 8px 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--light_transparent);
  }
`;
