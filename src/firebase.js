import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDAHev93hXuRLj0QHHdEV0G7jNS4YLxD8I',
  authDomain: 'netflix-clone-37df8.firebaseapp.com',
  projectId: 'netflix-clone-37df8',
  storageBucket: 'netflix-clone-37df8.appspot.com',
  messagingSenderId: '255048251319',
  appId: '1:255048251319:web:57f16821e25f6e9d215a32',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { auth };
export default db;
