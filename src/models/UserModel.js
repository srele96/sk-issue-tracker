import * as yup from 'yup';

const UserSchema = yup.object().shape({
  user_id: yup.string().required(),
  displayName: yup.string().required(),
});

export const UserModel = (user_id, displayName) => {
  const user = {
    user_id,
    displayName,
  };

  UserSchema.validate(user);

  return user;
};
