import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCcZmF-zmB2SECDUARHEJ3GxJYuBi8VsqY",
  authDomain: "linkedin-clone-426b2.firebaseapp.com",
  projectId: "linkedin-clone-426b2",
  storageBucket: "linkedin-clone-426b2.appspot.com",
  messagingSenderId: "223822507165",
  appId: "1:223822507165:web:2feb0c4ccced14e8a93874",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
