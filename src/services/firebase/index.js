import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALdNY6IZX_cLY6GJhHM_toVVrsWd1gUuM",
    authDomain: "ichiro-c325c.firebaseapp.com",
    projectId: "ichiro-c325c",
    storageBucket: "ichiro-c325c.appspot.com",
    messagingSenderId: "902031665614",
    appId: "1:902031665614:web:8c6ea2a2fd10bf79ab639f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)