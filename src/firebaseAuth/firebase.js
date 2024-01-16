import {initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from "@firebase/auth"
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcTfw3c7bFTQtyqjflqPfoHYLjuGncu_U",
  authDomain: "shopping-cart-with-redux-9fb72.firebaseapp.com",
  projectId: "shopping-cart-with-redux-9fb72",
  storageBucket: "shopping-cart-with-redux-9fb72.appspot.com",
  messagingSenderId: "76179983854",
  appId: "1:76179983854:web:cd106cfb797be06ae3d2ff",
  measurementId: "G-ZBJP8D6TRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db =getFirestore()
export {auth}
