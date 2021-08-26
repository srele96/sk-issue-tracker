import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const H1 = styled.h1`
  color: var(--emphasized_teal);
  padding-bottom: 16px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid var(--light_transparent);
`;

export const CardHeader = styled.div`
  padding: 8px;
  border-bottom: 1px solid var(--light_transparent);
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const UserLink = styled(Link)`
  color: var(--emphasized_teal);
  text-decoration: none;
  margin-right: 4px;
`;
