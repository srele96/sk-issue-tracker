import { Formik, Field } from 'formik';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { userSelector } from '../redux/slice';
import { CommentSchema, Collections } from '../models';
import { firestore } from '../util';
import {
  StyledForm,
  Label,
  LabelTitle,
  ErrorMessage,
  Content,
  SubmitContainer,
  Submit,
} from './CommentEditor-Styles';

export const CommentEditor = ({ issue_id }) => {
  const user = useSelector(userSelector);

  const getInitialState = () => ({
    comment_id: nanoid(),
    issue_id: issue_id,
    user_id: user.uid,
    displayName: user.displayName,
    content: '',
  });

  return (
    <Formik
      initialValues={getInitialState()}
      validationSchema={CommentSchema}
      onSubmit={(comment, actions) => {
        firestore()
          .collection(Collections.Comments)
          .doc(comment.comment_id)
          .set(comment, { merge: true })
          .then()
          .catch(() => {
            const errMessage = "Error! Couldn't create comment!";
            actions.setErrors({ failedToCreate: errMessage });
          })
          .finally(() => {
            actions.setValues(getInitialState());
            actions.setSubmitting(false);
          });
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <StyledForm>
          {errors.failedToCreate && (
            <ErrorMessage>{errors.failedToCreate}</ErrorMessage>
          )}

          <Label>
            <LabelTitle>Comment on Issue</LabelTitle>

            {errors.content && touched.content && (
              <ErrorMessage>{errors.content}</ErrorMessage>
            )}

            <Field as={Content} id="content" name="content" />
          </Label>

          <SubmitContainer>
            <Submit type="submit" disabled={isSubmitting}>
              Comment
            </Submit>
          </SubmitContainer>
        </StyledForm>
      )}
    </Formik>
  );
};
