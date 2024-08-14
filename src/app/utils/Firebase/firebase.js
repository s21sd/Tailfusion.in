import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbulaD_CaxKYVnbydFeFOxbTMflG4C1PM",
  authDomain: "tailfusion-2c050.firebaseapp.com",
  projectId: "tailfusion-2c050",
  storageBucket: "tailfusion-2c050.appspot.com",
  messagingSenderId: "4196442400",
  appId: "1:4196442400:web:cc6a53bcd99e58d6b03745"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
