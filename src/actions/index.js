import is from 'is_js';
import { poemDatabaseRef, storageRef } from '../config/firebase';
import { getTranslateRemotePath } from '../utils/firebaseStoragePath';

export const FETCH_POEMS = 'FETCH_POEMS';
export const FETCH_POEM = 'FETCH_POEM';
export const GET_STORAGE_URI = 'GET_STORAGE_URI';

export const fetchPoems = () => async dispatch => {
  poemDatabaseRef.on('value', snap => {
    dispatch({
      type: FETCH_POEMS,
      payload: snap.val(),
    });
  });
};

export const fetchPoem = id => async dispatch => {
  poemDatabaseRef.on('value', snap => {
    dispatch({
      type: FETCH_POEM,
      payload: snap.val(),
      id,
    });
  });
};

export const getTranslatedPoemMedia = media => async dispatch => {
  const platformAudioExtension = is.firefox() ? 'ogg' : 'mp3';
  const audioURI = await storageRef
    .child(getTranslateRemotePath.audio)
    .child(`${media}.${platformAudioExtension}`)
    .getDownloadURL();
  const scriptURI = await storageRef
    .child(getTranslateRemotePath.script)
    .child(`${media}.txt`)
    .getDownloadURL();

  dispatch({
    type: GET_STORAGE_URI,
    payload: { audioURI, scriptURI },
  });
};
