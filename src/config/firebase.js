import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import FirebaseConfig from './keys';

firebase.initializeApp(FirebaseConfig);

const dbName = '1_ND_aomrsJvbmphmHtFXI4hvAeMQDnlku1cy1wRZVNs';
export const poemDatabaseRef = firebase
  .database()
  .ref()
  .child(dbName);

export const storageRef = firebase
  .storage()
  .ref();
