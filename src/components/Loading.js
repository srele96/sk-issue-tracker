import styled, { keyframes } from 'styled-components';

export const LoadingStyle = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled.div`
  display: flex;
  height: 100px;
`;

const resize = keyframes`
  0% {
    height: 75px;
  } 50% {
    height: 15px;
  } 100% {
    height: 75px;
  }
`;

export const LoadingRow = styled.div`
  margin: auto 0;
  border-radius: 999px;
  background-color: var(--emphasized_teal);
  width: 7.5px;
  height: 100px;
  animation-name: ${resize};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:first-child {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.25s;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
  }
`;

export const Loading = () => (
  <LoadingStyle>
    <h3>Loading</h3>
    <LoadingContainer>
      <LoadingRow />
      <LoadingRow />
      <LoadingRow />
    </LoadingContainer>
  </LoadingStyle>
);
