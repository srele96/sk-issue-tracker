import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../util';
import { setUser, setUserStatus } from '../redux/slice';

// Wraps around auth().onAuthStateChanged and keeps user in
// redux store updated if user is signed in or signed out.
export const useAuth = (auth) => {
  const dispatch = useDispatch();

  const authStateChange = useCallback(
    (user) => {
      dispatch(setUser(user?.toJSON()));
      dispatch(setUserStatus(status.complete));
    },
    [dispatch]
  );

  const authError = useCallback(
    (error) => {
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
