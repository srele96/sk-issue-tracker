import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TiArrowSortedDown } from 'react-icons/ti';

const DropdownContainer = styled.div`
  margin-left: auto;
  position: relative;
  display: flex;
`;

const Button = styled.button`
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  padding: 0 16px;
  border: 0;
  color: var(--emphasized_teal);
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const StyledArrow = styled.span`
  top: 5%;
  font-size: 20px;
  display: flex;
  position: relative;
  transform: rotate(${({ isVisible }) => (isVisible ? '-180deg' : '0deg')});
  transition: transform 0.3s ease;
`;

const Arrow = ({ isVisible }) => (
  <StyledArrow isVisible={isVisible}>
    <TiArrowSortedDown />
  </StyledArrow>
);

Arrow.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

const Dropdown = styled.div`
  text-align: center;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: visibility 0.3s ease;
  overflow: hidden;
  margin-right: -16px;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100vw;
  max-width: 360px;
`;

Dropdown.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

const DropdownSlide = styled.div`
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease;
`;

DropdownSlide.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

const DropdownWrap = styled.div`
  padding: 16px;
`;

const DropdownContent = styled.div`
  padding: 16px;
  border-radius: 6px;
  background-color: var(--darker);
  box-shadow: 0px 1px 2px var(--darker);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Close = styled(Button)`
  border: 1px solid var(--emphasized_teal);
  padding: 8px 16px;
`;

export {
  Button,
  Arrow,
  Dropdown,
  DropdownContainer,
  DropdownSlide,
  DropdownWrap,
  DropdownContent,
  Close,
};
