// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDsaBdxO7p6ckPaZaGLc7VGQYiL2S8l0tg",
//   authDomain: "login-form-team2.firebaseapp.com",
//   projectId: "login-form-team2",
//   storageBucket: "login-form-team2.appspot.com",
//   messagingSenderId: "262275409238",
//   appId: "1:262275409238:web:566a24a5a3370ec0e162f7",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// //Getting all the objects of html
// var email = document.getElementById("email");
// var password = document.getElementById("password");

// //making an function
// window.signup = function (e) {
//   e.preventDefault();
//   var obj = {
//     email: email.value,
//     password: password.value,
//   };
//   createUserWithEmailAndPassword(auth, obj.email, obj.password)
//     .then(function (success) {
//       alert("Signup Successfully!");
//     })
//     .catch(function (err) {
//       alert("error" + err);
//     });
//   console.log(obj);
// };
