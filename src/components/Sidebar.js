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

const Sidebar = ({ isVisible }) => {
  return (
    <StyledSidebar isVisible={isVisible}>
      <StyledSidebarBrand>
        <StyledLogo to={routes.home}>SK - I - T</StyledLogo>
      </StyledSidebarBrand>

      <StyledSidebarItems>
        <StyledSidebarNav>
          <StyledMenuList>
            <StyledMenuItem>
              <StyledMenuLink to={routes.home}>Home</StyledMenuLink>
            </StyledMenuItem>
          </StyledMenuList>
        </StyledSidebarNav>
      </StyledSidebarItems>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export { Sidebar };
