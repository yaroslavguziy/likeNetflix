import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  onAuthStateChanged,
  updateEmail as updateEmailFirebase,
  updatePassword as updatePasswordFirebase,
  updateProfile as updateProfileFirebase,
} from 'firebase/auth';

import { auth } from 'db/auth';
import { routes } from 'constants/routes';
import { USER_KEY } from 'constants/query';
import { useUser } from './users';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { replace } = useHistory();
  const queryClient = useQueryClient();
  const { data: user } = useUser();

  const signUp = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { displayName, email, phoneNumber, photoURL, uid } = user;
        queryClient.setQueryData(USER_KEY, () => ({ displayName, email, phoneNumber, photoURL, uid }));
        replace(routes.profile);
      })
      .catch(error => {
        console.log(error);
      });

  const signIn = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { displayName, email, phoneNumber, photoURL, uid } = user;
        queryClient.setQueryData(USER_KEY, () => ({ displayName, email, phoneNumber, photoURL, uid }));
        replace(routes.profile);
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

  const updatePassword = password => updatePasswordFirebase(auth.currentUser, password);

  const updateEmail = email => updateEmailFirebase(auth.currentUser, email);

  const updateProfile = data => updateProfileFirebase(auth.currentUser, data);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { displayName, email, phoneNumber, photoURL, uid } = user;
        queryClient.setQueryData(USER_KEY, () => ({ displayName, email, phoneNumber, photoURL, uid }));
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return { isLoading, signUp, user, signOut, signIn, updateProfile, updateEmail, updatePassword };
};
