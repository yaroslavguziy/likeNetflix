import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
} from 'firebase/auth';

import app from 'db/app';

const auth = getAuth(app);

export const signUp = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log(userCredential);
      const user = userCredential.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

export const signIn = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

export const signOut = signOutFirebase(auth)
  .then(() => {})
  .catch(error => {});
