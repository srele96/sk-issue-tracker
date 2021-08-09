import * as yup from 'yup';

export const ProjectSchema = yup.object().shape({
  project_id: yup.string().required(),
  user_id: yup.string().required(),
  title: yup
    .string()
    .min(5, 'Title requires at least 5 characters!')
    .max(20, 'Title may contain max 20 characters!')
    .required('Title is required!'),
  description: yup
    .string()
    .min(20, 'Description requires at least 20 characters!')
    .max(200, 'Description may contain max 200 characters')
    .required('Description is required!'),
});
