import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBs3GC_31hzh3q6g5oXXlW-FnvSQRPNS5k",
    authDomain: "whatsapp-mern-f0273.firebaseapp.com",
    projectId: "whatsapp-mern-f0273",
    storageBucket: "whatsapp-mern-f0273.appspot.com",
    messagingSenderId: "936008803941",
    appId: "1:936008803941:web:5b443cc9c6658c15fb888c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 
  export {auth, provider};
  export default db;