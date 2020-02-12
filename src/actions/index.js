import { poemDatabaseRef, storageRef } from '../config/firebase';
import { getTranslateRemotePath } from '../utils/firebaseStoragePath';

export const FETCH_POEMS = 'FETCH_POEMS';
export const GET_STORAGE_URI = 'GET_STORAGE_URI';

export const fetchPoems = () => async dispatch => {
  poemDatabaseRef.on('value', snap => {
    dispatch({
      type: FETCH_POEMS,
      payload: snap.val(),
    });
  });
};

export const getTranslatedPoem = id => async dispatch => {
  const audioURI = await storageRef
    .child(getTranslateRemotePath.audio)
    .child(`${id}.mp3`)
    .getDownloadURL();
  const scriptURI = await storageRef
    .child(getTranslateRemotePath.script)
    .child(`${id}.txt`)
    .getDownloadURL();

  dispatch({
    type: GET_STORAGE_URI,
    payload: { audioURI, scriptURI },
  });
};
