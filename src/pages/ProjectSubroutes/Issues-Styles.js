import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  /* I wanted to pass isOpen prop to Link but it gives error, this doesn't. */
  border-top: 1px solid
    ${({ isOpen }) => (isOpen ? 'var(--light_transparent)' : 'transparent')};
  border-left: 1px solid
    ${({ isOpen }) => (isOpen ? 'var(--light_transparent)' : 'transparent')};
  border-right: 1px solid
    ${({ isOpen }) => (isOpen ? 'var(--light_transparent)' : 'transparent')};
  /* Hides border below selected list item. */
  & a::after {
    background-color: ${({ isOpen }) =>
      isOpen ? 'var(--dark)' : 'transparent'};
  }
  & a {
    color: ${({ isOpen }) =>
      isOpen ? 'var(--emphasized_teal)' : 'var(--light)'};
  }
`;

export const ListLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding: 8px 16px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    min-height: 1px;
    height: 1px;
    max-height: 1px;
  }
`;
