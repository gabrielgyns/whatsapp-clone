import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgTSJ5qxctReR6-LLPMdb4sIL4lgXaqps",
    authDomain: "whatsapp-clone-2cfff.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-2cfff.firebaseio.com",
    projectId: "whatsapp-clone-2cfff",
    storageBucket: "whatsapp-clone-2cfff.appspot.com",
    messagingSenderId: "826790552594",
    appId: "1:826790552594:web:5fd5ac945e371040ae64cb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;