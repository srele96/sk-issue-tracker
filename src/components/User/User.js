import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/slice';
import { UserDetail } from './UserDetails';
import { ChoseLogin } from './ChoseLogin';
import {
  Button,
  Arrow,
  Dropdown,
  DropdownContainer,
  DropdownSlide,
  DropdownWrap,
  DropdownContent,
  Close,
} from './User-Styles';

export const User = () => {
  const ButtonRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector(userSelector);

  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <DropdownContainer>
      <Button ref={ButtonRef} onClick={() => setIsDropdownOpen(true)}>
        {user ? user.displayName : 'Sign In'}
        <Arrow isVisible={isDropdownOpen} />
      </Button>

      <Dropdown isVisible={isDropdownOpen}>
        <DropdownSlide isVisible={isDropdownOpen}>
          <DropdownWrap>
            <DropdownContent>
              <Close onClick={() => setIsDropdownOpen(false)}>Close</Close>

              {user ? (
                <UserDetail closeDropdown={closeDropdown} user={user} />
              ) : (
                <ChoseLogin />
              )}
            </DropdownContent>
          </DropdownWrap>
        </DropdownSlide>
      </Dropdown>
    </DropdownContainer>
  );
};
