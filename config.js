import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBa9kx1S3R6xBzqD_UTbohZtHvx0WQZytY",
    authDomain: "e-ride-ae92b.firebaseapp.com",
    projectId: "e-ride-ae92b",
    storageBucket: "e-ride-ae92b.appspot.com",
    messagingSenderId: "310451329834",
    appId: "1:310451329834:web:f8a85511959d7af16a5c53"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


