import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../util';
import { setUser, setUserStatus } from '../redux/slice';
import { UserModel, Collections } from '../models';
import { firestore } from '../util';

// Wraps around auth().onAuthStateChanged and keeps user in
// redux store updated if user is signed in or signed out.
export const useAuth = (auth) => {
  const dispatch = useDispatch();

  const authStateChange = useCallback(
    (user) => {
      dispatch(setUserStatus(status.pending));

      if (user) {
        const userData = UserModel(user.uid, user.displayName);

        firestore()
          .collection(Collections.Users)
          .doc(userData.user_id)
          .set(userData, { merge: true });
      }

      dispatch(setUser(user ? user.toJSON() : null));
      dispatch(setUserStatus(status.complete));
    },
    [dispatch]
  );

  const authError = useCallback(
    (error) => {
      dispatch(setUserStatus(status.pending));
      dispatch(setUserStatus(status.error));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setUserStatus(status.pending));
    const listener = auth().onAuthStateChanged(authStateChange, authError);

    return () => listener();
  }, [dispatch, authStateChange, authError, auth]);
};
