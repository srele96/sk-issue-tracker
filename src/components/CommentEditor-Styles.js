import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelTitle = styled.div`
  padding-bottom: 4px;
`;

export const ErrorMessage = styled.div`
  color: #f90404;
  padding-bottom: 4px;
`;

export const Content = styled.textarea`
  border-radius: 6px;
  border: 1px solid var(--light_transparent);
  background-color: inherit;
  color: var(--light);
  font-size: 16px;
  min-height: 100px;
  padding: 16px;
`;

export const SubmitContainer = styled.div`
  padding-top: 16px;
`;

export const Submit = styled.button`
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid var(--light_transparent);
  background-color: inherit;
  color: var(--light);
  padding: 8px 16px;
`;
