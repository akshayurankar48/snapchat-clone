import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB57yqAfmrI63bh6SrQR4ShIolRdLxIQI8",
  authDomain: "snapchat-clone-yt-4c2b9.firebaseapp.com",
  projectId: "snapchat-clone-yt-4c2b9",
  storageBucket: "snapchat-clone-yt-4c2b9.appspot.com",
  messagingSenderId: "246703604561",
  appId: "1:246703604561:web:51fae5cb58ddb13b8a4970",
  measurementId: "G-427EZ2PMM9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
