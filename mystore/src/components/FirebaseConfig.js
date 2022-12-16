// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDn4FTQ2GffCqdnLnkgvQW5PXIVQV6DZ-g",
    authDomain: "mystore-78983.firebaseapp.com",
    projectId: "mystore-78983",
    storageBucket: "mystore-78983.appspot.com",
    messagingSenderId: "843273527655",
    appId: "1:843273527655:web:57a0af6bbee8ad72354fc2",
    measurementId: "G-R3500VXT7N"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
            const val = localStorage.setItem("flag", true);
            window.location.reload()



        }).catch((errror) => {
            console.log(errror)
        })
}

