import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA27ZePIEMLoO2sr6FgxGiIoV0b4clok2w",
  authDomain: "twitter-clone-20e09.firebaseapp.com",
  projectId: "twitter-clone-20e09",
  storageBucket: "twitter-clone-20e09.appspot.com",
  messagingSenderId: "614562782590",
  appId: "1:614562782590:web:c4926d8c412dd26a68e72f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;