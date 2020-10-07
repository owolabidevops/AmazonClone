import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB6Ic9dzqBVu2XfEvfdWW6SLjd0gLDazqE",
    authDomain: "ecloneapp.firebaseapp.com",
    databaseURL: "https://ecloneapp.firebaseio.com",
    projectId: "ecloneapp",
    storageBucket: "ecloneapp.appspot.com",
    messagingSenderId: "381978929893",
    appId: "1:381978929893:web:a7e5878fbbf780bc10820c",
    measurementId: "G-L7446BY4TE"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth= firebase.auth();
  export { db, auth}