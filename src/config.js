// import * as firebase from "@react-native-firebase/app";
var firebase = require("firebase");

// import console = require("console");
var firebaseConfig = {
    apiKey: "AIzaSyBeHJeNSUMgmTu9mWyJcTURsLnC5kmw1a4",
    authDomain: "vanet-e47b1.firebaseapp.com",
    databaseURL: "https://vanet-e47b1.firebaseio.com",
    projectId: "vanet-e47b1",
    storageBucket: "vanet-e47b1.appspot.com",
    messagingSenderId: "607676512066",
    appId: "1:607676512066:web:f34f31869b51fe3e27badb",
    measurementId: "G-WTHEEVMJGR"
  };
// const app = Firebase.initializeApp(firebaseConfig);
// export const db = app.database();
// const firebase = require('@react-native-firebase/app');
console.log("hellp"+firebase)
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();