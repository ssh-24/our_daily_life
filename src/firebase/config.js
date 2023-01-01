/*eslint-disable */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 권한관련 
import {getFirestore} from 'firebase/firestore';//저장소 관련

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const appAuth = getAuth();// 권한 관련
const appFireStore = getFirestore(app);//저장소 관련

// export const authService = getAuth();
export {appAuth, appFireStore}
