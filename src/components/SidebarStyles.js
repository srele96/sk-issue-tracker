import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSidebar = styled.div`
  transform: ${({ isVisible }) =>
    isVisible ? 'translateX(0)' : 'translateX(-100%)'};
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  overflow: hidden;
  z-index: 999;
  transition: transform 0.3s ease;
`;

export const StyledSidebarBrand = styled.div`
  padding: 8px 16px;
  display: flex;
  height: 60px;
  min-height: 60px;
  max-height: 60px;
  background-color: var(--dark);
  box-shadow: 0px 1px 2px var(--darker);
  position: relative;
  z-index: 999;
  transition: 0.1s ease;
`;

export const StyledLogo = styled(Link)`
  text-decoration: none;
  color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const StyledSidebarItems = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 60px;
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  overflow: hidden;
`;

export const StyledSidebarNav = styled.div`
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

export const StyledMenuList = styled.ul`
  padding: 6px;
  min-height: 100%;
  height: 100%;
  max-height: 100%;
  overflow-x: auto;
  list-style: none;
`;

export const StyledMenuItem = styled.li`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 4px;
  }
`;

export const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: var(--light);
  border-radius: 6px;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  padding: 4px 16px;
`;
