import * as yup from 'yup';

export const CommentSchema = yup.object().shape({
  comment_id: yup.string().required('Comment ID is required!'),
  issue_id: yup.string().required('Issue ID is required!'),
  user_id: yup.string().required('User ID is required!'),
  displayName: yup.string().required('Display Name of user is required!'),
  content: yup
    .string()
    .max(300, 'Max content characters is 300!')
    .required('Comment content is required!'),
});
