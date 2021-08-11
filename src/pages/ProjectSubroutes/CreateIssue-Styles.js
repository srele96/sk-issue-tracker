import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div``;

export const H3 = styled.h3`
  padding-bottom: 8px;
  color: var(--emphasized_teal);
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const LabelTtitle = styled.div`
  padding-bottom: 4px;
`;

export const FieldError = styled.div`
  padding-bottom: 4px;
  color: #f90404;
`;

export const TitleField = styled.input`
  color: var(--light);
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  background-color: inherit;
  border: 1px solid var(--light_transparent);
  border-radius: 6px;
  font-size: 16px;
`;

export const DescriptionField = styled.textarea`
  color: var(--light);
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  background-color: inherit;
  border: 1px solid var(--light_transparent);
  border-radius: 6px;
  font-size: 16px;
  min-height: 100px;
`;

export const SubmitContainer = styled.div`
  padding-top: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 6px;
  padding: 8px 16px;
  background-color: inherit;
  color: var(--light);
  border: 1px solid var(--light_transparent);
`;
