import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUIRLahLzuwu423WJhj0xBGj4DsOyLJYI",
  authDomain: "webcars-961e2.firebaseapp.com",
  projectId: "webcars-961e2",
  storageBucket: "webcars-961e2.appspot.com",
  messagingSenderId: "538534543366",
  appId: "1:538534543366:web:10727ddfff2e8a5a224387",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
