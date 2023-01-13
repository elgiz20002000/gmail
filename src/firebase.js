import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAbp7qfWcpCyqdnLc0Eu7PUKA69xSZqSYY",
  authDomain: "my--clone-78bf4.firebaseapp.com",
  projectId: "my--clone-78bf4",
  storageBucket: "my--clone-78bf4.appspot.com",
  messagingSenderId: "138380334390",
  appId: "1:138380334390:web:a4aa17858f6290599e8f97"
};



const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db , auth , provider}
