import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCS69GEk9EkeMVuBkngY3KAt8AmYHGEN_M",
    authDomain: "modulo3-2c195.firebaseapp.com",
    databaseURL: "https://modulo3-2c195.firebaseio.com",
    projectId: "modulo3-2c195",
    storageBucket: "gs://modulo3-2c195.appspot.com",
    messagingSenderId: "767556880207",
    appId: "1:767556880207:web:3a01ef022d99bf0496273a",
    measurementId: "G-G5MD89JDSY"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
  // firebaseApp.firestore().settings({timestampsInSnapshots : true});
  export default firebaseApp.firestore();
export const db = firebaseApp.database();
