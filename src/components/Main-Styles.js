import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding: 16px 16px 0 16px;
`;

export const Button = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid var(--light_transparent);
  color: 1px solid var(--light);
  background-color: inherit;
  & svg {
    margin-right: 6px;
    transition: transform 0.3s ease;
  }
  &:hover svg {
    transform: translateX(-7px);
  }
`;
