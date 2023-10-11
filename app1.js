// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDsaBdxO7p6ckPaZaGLc7VGQYiL2S8l0tg",
  authDomain: "login-form-team2.firebaseapp.com",
  projectId: "login-form-team2",
  storageBucket: "login-form-team2.appspot.com",
  messagingSenderId: "262275409238",
  appId: "1:262275409238:web:566a24a5a3370ec0e162f7",
};

firebase.initializeApp(firebaseConfig);

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      document.getElementById(
        "message"
      ).innerText = `Logged in as ${user.email}`;
    })
    .catch((error) => {
      const errorMessage = error.message;
      document.getElementById("message").innerText = errorMessage;
    });
}
