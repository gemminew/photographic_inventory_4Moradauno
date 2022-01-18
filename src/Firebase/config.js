import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAQKnzJD-6NEzClrxCbBr58mm1qzpXoSwY",
  authDomain: "morada-uno.firebaseapp.com",
  projectId: "morada-uno",
  storageBucket: "morada-uno.appspot.com",
  messagingSenderId: "174889854760",
  appId: "1:174889854760:web:906da89bc494d033fe521d"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)

export {
    auth,
    firestore,
    storage
}


//METODOS DE FIREBASE PARA CADA SERVICIO

//Firestore
//doc, setDoc, getDoc, updateDoc

//Auth
//signOut, signInWithEmailAndPassword, onAuthStateChanged

//Storage
//ref, uploadBytes, getDownloadURL