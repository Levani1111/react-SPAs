import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBSSZKzj2s0qCmGTB1TqYBUEeZQooF6Ark",
  authDomain: "react-spas-d4d35.firebaseapp.com",
  databaseURL: "https://react-spas-d4d35.firebaseio.com",
  projectId: "react-spas-d4d35",
  storageBucket: "react-spas-d4d35.appspot.com",
  messagingSenderId: "779827692712",
  appId: "1:779827692712:web:0b0d2f37a0c5b49e522e9d",
  measurementId: "G-RBPK4BSVHP",
};
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;