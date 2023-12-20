import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDJogREeXQ_Gsay7s0AkgwDHVBMJuPSp1c",
    authDomain: "vue-firebase-dc8c2.firebaseapp.com",
    databaseURL: "https://vue-firebase-dc8c2-default-rtdb.firebaseio.com",
    projectId: "vue-firebase-dc8c2",
    storageBucket: "vue-firebase-dc8c2.appspot.com",
    messagingSenderId: "615615525484",
    appId: "1:615615525484:web:442da60fa2fb589b4cde49"
  };

 firebase.initializeApp(firebaseConfig);

  export default firebase.database(); 