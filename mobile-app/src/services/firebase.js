import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCggN-J-s71QjznNcwbB1PC-sSb-zem7dQ',
  authDomain: 'spark-dating-5c7fc.firebaseapp.com',
  projectId: 'spark-dating-5c7fc',
  storageBucket: 'spark-dating-5c7fc.firebasestorage.app',
  messagingSenderId: '190986838288',
  appId: '1:190986838288:web:4e9d2fded8c7097aad8595',
  databaseURL: 'https://spark-dating-5c7fc-default-rtdb.firebaseio.com'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
