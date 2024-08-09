import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDy_7ChkVKdsE74pK4oDrd3KmvZKOsmsh8",
    authDomain: "tailfusion-4ae92.firebaseapp.com",
    projectId: "tailfusion-4ae92",
    storageBucket: "tailfusion-4ae92.appspot.com",
    messagingSenderId: "1001660398145",
    appId: "1:1001660398145:web:e4cc6b4eed98ba4b8764c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
