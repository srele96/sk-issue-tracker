import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 16px;
  border-radius: 6px;
  border: 1px solid var(--light_transparent);
`;

export const H2 = styled.h2`
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid var(--light_transparent);
`;

export const DivMessage = styled.div`
  text-align: center;
  padding: 16px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  display: flex;

  @media (min-width: 640px) {
    min-width: 50%;
    width: 50%;
    max-width: 50%;

    &:nth-child(odd) {
      border-right: 1px solid var(--light_transparent);
    }
  }
`;

export const ListLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  flex: 1;
  text-decoration: none;
  color: var(--emphasized_teal);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--light_transparent);
  }
`;
