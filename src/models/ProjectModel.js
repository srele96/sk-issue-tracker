import * as yup from 'yup';

const ProjectSchema = yup.object().shape({
  project_id: yup.string().required(),
  user_id: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
});

export const ProjectModel = (project_id, user_id, title, description) => {
  const project = {
    project_id,
    user_id,
    title,
    description,
  };

  ProjectSchema.validate(project);

  return project;
};
