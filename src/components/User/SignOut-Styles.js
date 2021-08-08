import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 16px;
  cursor: pointer;
  background: inherit;
  border: 1px solid var(--light);
  color: var(--light);
  margin-left: auto;
  max-width: max-content;
  border-radius: 6px;
  padding: 4px 12px;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-property: border-color, color;
  &:hover {
    border-color: var(--emphasized_teal);
    color: var(--emphasized_teal);
  }
`;
