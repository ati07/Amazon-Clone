import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjw9yfH1n83-JZbxJp-MCZLmGkYCfvWTQ",
  authDomain: "my-3507b.firebaseapp.com",
  databaseURL:"https://my-3507b.firebaseapp.com",
  projectId: "my-3507b",
  storageBucket: "my-3507b.appspot.com",
  messagingSenderId: "439818571281",
  appId: "1:439818571281:web:44af3b411d35fd8d602bb0",
  measurementId: "G-41EZSQG0L5"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  
  export {db, auth }