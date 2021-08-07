import { useEffect, useRef, useState } from 'react';
import { User } from './User';
import { routes } from '../routes';
import { RiMenuFill } from 'react-icons/ri';
import { Sidebar } from './Sidebar';
import {
  StyledHeader,
  StyledNav,
  StyledLogo,
  StyledNavMenu,
  StyledNavItem,
  StyledLink,
  StyledButton,
  StyledBackdrop,
} from './HeaderStyles';

export const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const backdropRef = useRef();

  // Backdrop is only visible when sidebar is visible.
  // Therefore backdrop is only clickable when sidebar is visible.
  const backdropHideSidebar = (event) => {
    if (event.target === backdropRef.current) {
      setIsSidebarVisible(false);
    }
  };

  // Disable scroll if menu is visible.
  useEffect(() => {
    if (isSidebarVisible) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
      document.getElementsByTagName('body')[0].style.overflow = '';
    }
  }, [isSidebarVisible]);

  useEffect(() => {
    window.addEventListener('click', backdropHideSidebar);

    return () => window.removeEventListener('click', backdropHideSidebar);
  });

  const toggle = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  const linkHideSidebar = () => setIsSidebarVisible(false);

  return (
    <StyledHeader>
      <StyledNav>
        <StyledButton onClick={toggle}>
          <RiMenuFill />
        </StyledButton>

        <StyledLogo to={routes.home}>SK - I - T</StyledLogo>

        <StyledNavMenu>
          <StyledNavItem>
            <StyledLink to={routes.home}>Home</StyledLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledLink to={routes.users}>Users</StyledLink>
          </StyledNavItem>
        </StyledNavMenu>

        <User />

        <StyledBackdrop ref={backdropRef} isVisible={isSidebarVisible} />

        <Sidebar
          linkHideSidebar={linkHideSidebar}
          isVisible={isSidebarVisible}
        />
      </StyledNav>
    </StyledHeader>
  );
};
