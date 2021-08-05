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
  StyledLink,
  StyledButton,
  StyledBackdrop,
} from './HeaderStyles';

export const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const backdropRef = useRef();

  // Backdrop is only visible when sidebar is visible.
  // Therefore backdrop is only clickable when sidebar is visible.
  const hideSidebar = (event) => {
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
    window.addEventListener('click', hideSidebar);

    return () => window.removeEventListener('click', hideSidebar);
  });

  const toggle = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  return (
    <StyledHeader>
      <StyledNav>
        <StyledButton onClick={toggle}>
          <RiMenuFill />
        </StyledButton>

        <StyledLogo to={routes.home}>SK - I - T</StyledLogo>

        <StyledNavMenu>
          <StyledLink to={routes.home}>Home</StyledLink>
        </StyledNavMenu>

        <User />

        <StyledBackdrop ref={backdropRef} isVisible={isSidebarVisible} />

        <Sidebar isVisible={isSidebarVisible} />
      </StyledNav>
    </StyledHeader>
  );
};
