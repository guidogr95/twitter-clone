import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzAWiuETT5J2upTdB5cX1r76Qawck7Snw",
  authDomain: "twitter-clone-bdtest.firebaseapp.com",
  databaseURL: "https://twitter-clone-bdtest-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-bdtest",
  storageBucket: "twitter-clone-bdtest.appspot.com",
  messagingSenderId: "182953058903",
  appId: "1:182953058903:web:7b1a51e57fe84486cfb912"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  app,
  auth,
  db
}