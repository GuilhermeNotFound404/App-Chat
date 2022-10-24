import firebase from "firebase/compat/app";
import "firebase/comapat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoPs6TclUNKl8oKFIePt0RVugy82BMFW8",
  authDomain: "chat-app-aa6d5.firebaseapp.com",
  projectId: "chat-app-aa6d5",
  storageBucket: "chat-app-aa6d5.appspot.com",
  messagingSenderId: "417702212372",
  appId: "1:417702212372:web:6524a90030a55107ae0801",
};

const app = firebase.initalizeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
