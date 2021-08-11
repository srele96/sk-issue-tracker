import { Formik, Field } from 'formik';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';
import { ProjectSchema, Collections } from '../models';
import { userSelector } from '../redux/slice';
import { Main } from '../components/Main';
import { firestore } from '../util';
import {
  Container,
  Wrapper,
  H1,
  StyledForm,
  Label,
  LabelTitle,
  ErrorMessage,
  InputTitle,
  InputDescription,
  ButtonWrapper,
  SubmitBtn,
} from './CreateProject-Styles';

export const CreateProject = () => {
  const history = useHistory();
  const user = useSelector(userSelector);

  return (
    <Main>
      <Container>
        <H1>Create Project</H1>
        <Wrapper>
          <Formik
            initialValues={{
              project_id: nanoid(),
              user_id: user.uid,
              title: '',
              description: '',
            }}
            validationSchema={ProjectSchema}
            onSubmit={(project, actions) => {
              firestore()
                .collection(Collections.Projects)
                .doc(project.project_id)
                .set(project, { merge: true })
                .then(() => {
                  history.push(
                    `/users/${user.uid}/project/${project.project_id}`
                  );
                })
                .catch(() => {
                  const errMessage = "Error! Couldn't create project!";
                  actions.setErrors({ failedToCreate: errMessage });
                })
                .finally(() => {
                  actions.setSubmitting(false);
                });
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <StyledForm>
                {errors.failedToCreate && (
                  <ErrorMessage>{errors.failedToCreate}</ErrorMessage>
                )}
                <Label htmlFor="title">
                  <LabelTitle>
                    Project Title <span title="Required">*</span>
                  </LabelTitle>

                  {errors.title && touched.title && (
                    <ErrorMessage>{errors.title}</ErrorMessage>
                  )}
                  <Field
                    as={InputTitle}
                    placeholder="My awesome project title..."
                    type="text"
                    name="title"
                    id="title"
                    required
                  />
                </Label>

                <Label htmlFor="description">
                  <LabelTitle>
                    Project Description <span title="Required">*</span>
                  </LabelTitle>
                  {errors.description && touched.description && (
                    <ErrorMessage>{errors.description}</ErrorMessage>
                  )}
                  <Field
                    as={InputDescription}
                    placeholder="My awesome description of my awesome project..."
                    name="description"
                    id="description"
                    required
                  />
                </Label>

                <ButtonWrapper>
                  <SubmitBtn type="submit" disabled={isSubmitting}>
                    <span>Create Project</span>
                  </SubmitBtn>
                </ButtonWrapper>
              </StyledForm>
            )}
          </Formik>
        </Wrapper>
      </Container>
    </Main>
  );
};
