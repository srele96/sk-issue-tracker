import styled from 'styled-components';

export const StyledH1 = styled.h1`
  text-align: center;
  text-shadow: 0px 1px 2px #000000;
  color: var(--emphasized_teal);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 48px 20px;
  @media (min-width: 700px) {
    flex-direction: row;
    font-size: 24px;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    font-size: 28px;
  }
`;

export const WrapLeft = styled.div`
  flex: 1;
  padding: 0px 20px 20px 20px;
  @media (min-width: 1000px) {
    max-width: 360px;
  }
`;

export const WrapRight = styled.div`
  flex: 1;
  padding: 0px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    max-width: 360px;
  }
`;

export const Row = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  @media (min-width: 1000px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const StypedP = styled.p`
  font-size: 24px;
  text-align: center;
`;
