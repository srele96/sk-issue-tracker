import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  text-shadow: 0px 1px 2px var(--even_darker);
`;

export const Emp = styled.span`
  color: var(--emphasized_teal);
`;

export const UserHeader = styled.div`
  text-align: center;
`;

export const UserProjects = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
`;

export const CreateProject = styled(Link)`
  margin-left: auto;
  border-radius: 6px;
  border: 1px solid var(--light_transparent);
  max-width: max-content;
  padding: 8px 16px;
  color: var(--emphasized_teal);
  text-decoration: none;
  display: flex;
  align-items: center;
  & svg {
    margin-left: 6px;
  }
`;
