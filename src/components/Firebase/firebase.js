import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwaDmWXVMHJtaNzyMmdbb8MHqgo4P_8kc",
    authDomain: "simple-donate.firebaseapp.com",
    databaseURL: "https://simple-donate.firebaseio.com",
    projectId: "simple-donate",
    storageBucket: "simple-donate.appspot.com",
    messagingSenderId: "463811966406",
    appId: "1:463811966406:web:c88c66ab601b38f4816ec7"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;
