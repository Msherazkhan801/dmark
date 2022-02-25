import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDV7oSRZ_ntGH__VAiXcJJ9muQYoWlZ__4",
  authDomain: "dmark-bf8a8.firebaseapp.com",
  projectId: "dmark-bf8a8",
  storageBucket: "dmark-bf8a8.appspot.com",
  messagingSenderId: "573394005237",
  appId: "1:573394005237:web:0b6591f9efbd5d350de9bc"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
