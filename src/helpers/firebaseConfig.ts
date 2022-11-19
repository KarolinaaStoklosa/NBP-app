import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import{getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkrRt3CD_QjYv56Ns1fH6TsnUJ72XaIj0",
  authDomain: "nbp-app-zdfronpol10.firebaseapp.com",
  projectId: "nbp-app-zdfronpol10",
  storageBucket: "nbp-app-zdfronpol10.appspot.com",
  messagingSenderId: "250009228093",
  appId: "1:250009228093:web:20978a3e6998c6b6d02b54"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const firestore = getFirestore(app)