import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCH9zz6JG2O2fAnAmzU5BT6pJuApk3wK44",
    authDomain: "registro-de-tarefas-bb98d.firebaseapp.com",
    projectId: "registro-de-tarefas-bb98d",
    storageBucket: "registro-de-tarefas-bb98d.appspot.com",
    messagingSenderId: "843623331945",
    appId: "1:843623331945:web:d9b0d466c91e0612e28af8",
    measurementId: "G-ERTJYN2FT3"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };