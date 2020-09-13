import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA0gEcfz7huwuZ78viSrTVEYte9N0VCpvg",
    authDomain: "portfolio-1-8f8e8.firebaseapp.com",
    databaseURL: "https://portfolio-1-8f8e8.firebaseio.com",
    projectId: "portfolio-1-8f8e8",
    storageBucket: "portfolio-1-8f8e8.appspot.com",
    messagingSenderId: "281712473823",
    appId: "1:281712473823:web:a769e38f5b4c088e9d9b6a"
  });

var db = firebaseApp.firestore();

export { db };
