import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Message = styled.div``;

export const Container = styled.div`
  padding: 16px 0;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  border: 1px solid var(--light_transparent);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ListItemHeader = styled.span`
  padding: 8px;
  background-color: var(--light_transparent);
  display: flex;
`;

export const ListItemBody = styled.span`
  padding: 16px;
`;

export const ListLink = styled(Link)`
  text-decoration: none;
  color: var(--emphasized_teal);
  margin-right: 6px;
`;
