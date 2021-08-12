import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { Formik, Field } from 'formik';
import { firestore } from '../../util';
import { Collections, IssueSchema } from '../../models';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/slice';
import {
  Container,
  H3,
  StyledForm,
  TitleField,
  DescriptionField,
  Label,
  LabelTtitle,
  FieldError,
  SubmitContainer,
  Button,
} from './CreateIssue-Styles';

const CreateIssue = ({ project }) => {
  const user = useSelector(userSelector);

  return (
    <Container>
      <H3>Create Issue</H3>

      <Formik
        initialValues={{
          issue_id: nanoid(),
          project_id: project.project_id,
          user_id: user.uid,
          isOpen: true,
          title: '',
          description: '',
        }}
        validationSchema={IssueSchema}
        onSubmit={(issue, actions) => {
          firestore()
            .collection(Collections.Issues)
            .doc(issue.issue_id)
            .set(issue, { merge: true })
            .then(() => {
              // redirect to created issue
            })
            .catch(() => {
              const errMessage = "Error! Couldn't create issue!";
              actions.setErrors({ failedToCreate: errMessage });
            })
            .finally(() => {
              actions.setSubmitting(false);
            });
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <StyledForm>
            <Label htmlFor="title">
              <LabelTtitle>Issue title</LabelTtitle>

              {errors.title && touched.title && (
                <FieldError>{errors.title}</FieldError>
              )}

              <Field as={TitleField} type="text" name="title" id="title" />
            </Label>

            <Label htmlFor="description">
              <LabelTtitle>Issue description</LabelTtitle>

              {errors.description && touched.description && (
                <FieldError>{errors.description}</FieldError>
              )}

              <Field
                as={DescriptionField}
                name="description"
                id="description"
              />
            </Label>

            <SubmitContainer>
              <Button type="submit" disabled={isSubmitting}>
                Create Issue
              </Button>
            </SubmitContainer>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

CreateIssue.propTypes = {
  project: PropTypes.object.isRequired,
};

export { CreateIssue };
