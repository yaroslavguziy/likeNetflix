import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
} from 'firebase/auth';

import app from 'db/app';
import { USER_KEY, queryClient } from 'constants/query';

const auth = getAuth(app);

export const signUp = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      const { displayName, email, phoneNumber, photoURL, uid } = user;
      queryClient.setQueryData(USER_KEY, () => ({ displayName, email, phoneNumber, photoURL, uid }));
    })
    .catch(error => {
      console.log(error);
    });

export const signIn = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      const { displayName, email, phoneNumber, photoURL, uid } = user;
      queryClient.setQueryData(USER_KEY, () => ({ displayName, email, phoneNumber, photoURL, uid }));
    })
    .catch(error => {
      console.log(error);
    });

export const signOut = signOutFirebase(auth)
  .then(() => {})
  .catch(error => {});
