import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 16px;
`;

export const Wrapper = styled.div`
  border-radius: 6px;
  border: 1px solid var(--light_transparent);
`;

export const H1 = styled.h1`
  color: var(--emphasized_teal);
  padding-bottom: 16px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelTitle = styled.div`
  background-color: var(--light_transparent);
  padding: 8px 16px;
`;

export const ErrorMessage = styled.div`
  color: var(--light);
  background-color: #f90404;
  padding: 8px 16px;
`;

export const InputTitle = styled.input`
  font-size: 16px;
  color: var(--light);
  border-left: 0;
  border-right: 0;
  border-top: 1px solid var(--light_transparent);
  border-bottom: 1px solid var(--light_transparent);
  background-color: var(--dark);
  padding: 8px 16px;
`;

export const InputDescription = styled.textarea`
  font-size: 16px;
  color: var(--light);
  border-left: 0;
  border-right: 0;
  border-top: 1px solid var(--light_transparent);
  border-bottom: 1px solid var(--light_transparent);
  background-color: var(--dark);
  padding: 8px 16px;
`;

export const ButtonWrapper = styled.div`
  padding: 16px;
`;

export const SubmitBtn = styled.button`
  cursor: pointer;
  border-radius: 6px;
  padding: 8px 16px;
  color: var(--light);
  background-color: inherit;
  border: 1px solid var(--light_transparent);
`;
