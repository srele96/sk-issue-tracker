import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  height: 60px;
  min-height: 60px;
  max-height: 60px;
  background-color: var(--darker);
  box-shadow: 0px 1px 2px var(--even_darker);
`;

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  padding: 8px 16px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  cursor: pointer;
  border: 0;
  background: var(--darker);
  margin-right: 16px;
  font-size: 32px;
  & {
    @media (min-width: 1000px) {
      display: none;
    }
  }
`;

export const StyledLogo = styled(Link)`
  text-decoration: none;
  color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const StyledNavMenu = styled.ul`
  flex-direction: row;
  padding: 0 16px;
  display: none;
  list-style: none;
  & {
    @media (min-width: 1000px) {
      display: flex;
    }
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 6px;
  padding: 6px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--light);
  &:hover {
    color: var(--emphasized_teal);
  }
  transition: 0.3s ease;
`;

export const StyledBackdrop = styled.div`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 899;
  transition: 0.3s ease;
  transition-property: opacity, visibility;
`;
