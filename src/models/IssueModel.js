import * as yup from 'yup';

export const IssueSchema = yup.object().shape({
  issue_id: yup.string().required('Issue ID is required!'),
  project_id: yup.string().required('Project ID is required!'),
  user_id: yup.string().required('User ID is required!'),
  title: yup
    .string()
    .min(5, 'Title requires at least 5 characters!')
    .max(20, 'Title may contain max 20 characters!')
    .required('Title is required!'),
  description: yup
    .string()
    .min(10, 'Title requires at least 10 characters!')
    .max(200, 'Title may contain max 200 characters!')
    .required('Title is required!'),
});
