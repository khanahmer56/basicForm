// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1US5Rj7GIiXxxKFkk2shPT_JkgwrxSmU",
  authDomain: "reactform-86464.firebaseapp.com",
  databaseURL: "https://reactform-86464-default-rtdb.firebaseio.com",
  projectId: "reactform-86464",
  storageBucket: "reactform-86464.appspot.com",
  messagingSenderId: "173490351823",
  appId: "1:173490351823:web:5035dccd2dccb58efed1ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var database = firebase.database().ref("path/to/form");
database.once("value").then(function (snapshot) {
  // Handle the data here
  var data = snapshot.val();
  console.log(data);
});
database.once("value").then(function (snapshot) {
  // Handle the data here
  var data = snapshot.val();
  console.log(data);
});

// Listen for changes to the data
database.on("value", function (snapshot) {
  // Handle the data here
  var data = snapshot.val();
  console.log(data);
});
