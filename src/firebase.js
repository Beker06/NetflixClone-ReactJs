import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxUUyiu_jrYNdjiJgBdBoXHwNGaqEVvS8",
    authDomain: "netflixclone2-6f9f9.firebaseapp.com",
    projectId: "netflixclone2-6f9f9",
    storageBucket: "netflixclone2-6f9f9.appspot.com",
    messagingSenderId: "692905341698",
    appId: "1:692905341698:web:6cf16b8d95235ca58dc81b"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};