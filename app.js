
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getAuth,  createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4f7iu2WE9qKntJAQxxxYy8frgQY7GozE",
  authDomain: "thread-app-a8d48.firebaseapp.com",
  projectId: "thread-app-a8d48",
  storageBucket: "thread-app-a8d48.appspot.com",
  messagingSenderId: "230532856501",
  appId: "1:230532856501:web:10347133d51d8a30dd9cfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
const signUpEmail = document.querySelector("#email").value;
const signUpPassword =document.querySelector("#password").value;
const auth = getAuth();


createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
.then((userCredential) => {

  const user = userCredential.user;
  alert("signup sucssedfully")
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
});


})



