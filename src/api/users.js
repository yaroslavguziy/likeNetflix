import { ref, set, get, child } from 'firebase/database';

import { db } from 'db/database';
import { auth } from 'db/auth';
import { KEY } from 'hooks/entities';
import { queryClient } from 'constants/query';

export const getUsersFavoritesData = async () => {
  try {
    const snapshot = await get(child(ref(db), 'favorites/' + auth.currentUser.uid));

    let data = [];

    if (snapshot.exists()) {
      data = snapshot.val();
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postUsersFavoritesData = async id => {
  try {
    const data = await getUsersFavoritesData();

    const favorites = data.includes(id) ? data.filter(favId => favId !== id) : [...data, id];

    await set(ref(db, 'favorites/' + auth.currentUser.uid), favorites);

    await queryClient.refetchQueries(KEY, { active: true });
    await queryClient.refetchQueries([KEY, { id }], { active: true });
  } catch (error) {
    console.error(error);
  }
};

export const getUsersLikesData = async () => {
  try {
    const snapshot = await get(child(ref(db), 'likes'));

    let data = [];

    if (snapshot.exists()) {
      data = snapshot.val();
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postUsersLikesData = async id => {
  try {
    const uid = auth.currentUser.uid;

    const data = await getUsersLikesData();

    const likes = data[id]?.includes(uid)
      ? data[id].filter(favId => favId !== uid)
      : data[id]
      ? [...data[id], uid]
      : [uid];

    await set(ref(db, 'likes/' + id), likes);

    await queryClient.refetchQueries(KEY, { active: true });
    await queryClient.refetchQueries([KEY, { id }], { active: true });
  } catch (error) {
    console.error(error);
  }
};
