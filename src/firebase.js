import firebase from '../node_modules/firebase/compat'

const firebaseConfig = {
    apiKey: "AIzaSyAOIgQGXKHowCp5L4Wy1j_BN114A1JcAb0",
    authDomain: "whatsapp-clone-c6958.firebaseapp.com",
    projectId: "whatsapp-clone-c6958",
    storageBucket: "whatsapp-clone-c6958.appspot.com",
    messagingSenderId: "524858303524",
    appId: "1:524858303524:web:83e1e0270b4928b674a4b1",
    measurementId: "G-XSV73HQE26"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =  firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

