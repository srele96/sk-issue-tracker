import PropTypes from 'prop-types';
import { routes } from '../routes';
import {
  StyledSidebar,
  StyledSidebarBrand,
  StyledLogo,
  StyledSidebarItems,
  StyledSidebarNav,
  StyledMenuList,
  StyledMenuItem,
  StyledMenuLink,
} from './SidebarStyles';

const Sidebar = ({ linkHideSidebar, isVisible }) => {
  return (
    <StyledSidebar isVisible={isVisible}>
      <StyledSidebarBrand>
        <StyledLogo onClick={linkHideSidebar} to={routes.home}>
          SK - I - T
        </StyledLogo>
      </StyledSidebarBrand>

      <StyledSidebarItems>
        <StyledSidebarNav>
          <StyledMenuList>
            <StyledMenuItem>
              <StyledMenuLink onClick={linkHideSidebar} to={routes.home}>
                Home
              </StyledMenuLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <StyledMenuLink onClick={linkHideSidebar} to={routes.users}>
                Users
              </StyledMenuLink>
            </StyledMenuItem>
          </StyledMenuList>
        </StyledSidebarNav>
      </StyledSidebarItems>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  linkHideSidebar: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export { Sidebar };
