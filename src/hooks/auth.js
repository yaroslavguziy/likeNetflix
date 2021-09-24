import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from 'db/auth';
import { routes } from 'constants/routes';
import { USER_KEY } from 'constants/query';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { replace } = useHistory();
  const queryClient = useQueryClient();
  let user = queryClient.getQueryData(USER_KEY);

  const signUp = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { displayName, email, phoneNumber, photoURL, uid } = user;
        queryClient.setQueryData(USER_KEY, () => ({ displayName, email, phoneNumber, photoURL, uid }));
        replace(routes.shows);
      })
      .catch(error => {
        console.log(error);
      });

  const signIn = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { displayName, email, phoneNumber, photoURL, uid } = user;
        queryClient.setQueryData(USER_KEY, () => ({ displayName, email, phoneNumber, photoURL, uid }));
        replace(routes.shows);
      })
      .catch(error => {
        console.log(error);
      });

  const signOut = () =>
    signOutFirebase(auth)
      .then(() => {
        queryClient.resetQueries(USER_KEY, { exact: true });
        replace(routes.login);
      })
      .catch(error => {
        console.log(error);
      });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { displayName, email, phoneNumber, photoURL, uid } = user;
        queryClient.setQueryData(USER_KEY, () => ({ displayName, email, phoneNumber, photoURL, uid }));
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, [queryClient]);

  return { isLoading, signUp, user, signOut, signIn };
};
