import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Message = styled.div`
  display: flex;
  padding: 12px 16px;
`;

export const UsersContainer = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 16px;
  border-radius: 6px;
`;

export const Bordered = styled.div`
  border-radius: 6px;
  overflow: hidden;
  /* Outer border of table. */
  border: 1px solid var(--light_transparent);
`;

export const H1 = styled.h1`
  padding: 12px 16px;
  /* Border that separates title from data list. */
  border-bottom: 1px solid var(--light_transparent);
  & {
    @media (min-width: 640px) {
      text-align: center;
    }
  }
`;

export const UserList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  /* Wrap data in two columns. */
  & {
    @media (min-width: 640px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const UserItem = styled.li`
  display: flex;
  flex-direction: column;
  /* When only one column is present (small screen) */
  &:not(:last-child) a {
    border-bottom: 1px solid var(--light_transparent);
  }
  /* When two columns are present, only left side needs border on the right */
  &:nth-child(odd) a {
    @media (min-width: 640px) {
      border-right: 1px solid var(--light_transparent);
    }
  }
  /* 
   * When last child is odd child, remove it's bottom border.
   *
   * Select last odd child.
   *
   * Solution reference:
   * https://stackoverflow.com/questions/8641003/css-last-odd-child/8641059
  */
  &:nth-last-child(2):nth-child(odd) a {
    @media (min-width: 640px) {
      border-bottom: 0;
    }
  }
  /*
   * For users to be in two columns in flex parent, they must have half width.
  */
  & {
    @media (min-width: 640px) {
      width: 50%;
      min-width: 50%;
      max-width: 50%;
    }
  }
`;

export const UserLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--light);
  padding: 12px 16px;
  transition: color 0.3s ease, background-color 0.3s ease;
  & svg {
    transition: transform 0.3s ease;
  }
  &:hover {
    background-color: var(--light_transparent);
  }
  &:hover svg {
    transform: translateX(7px);
  }
`;
