import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyBoGfSbEfsninaNq5T6HLsu2ER5WAD60us",
    authDomain: "tenedores-1c8be.firebaseapp.com",
    projectId: "tenedores-1c8be",
    storageBucket: "tenedores-1c8be.appspot.com",
    messagingSenderId: "594917043911",
    appId: "1:594917043911:web:7aeee206f0965c87c898e2"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);