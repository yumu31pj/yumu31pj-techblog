// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBJczA488k8u0Jhsi0Nq106kiNdGjq5G4",
  authDomain: "yumu31pj-techblog.firebaseapp.com",
  projectId: "yumu31pj-techblog",
  storageBucket: "yumu31pj-techblog.appspot.com",
  messagingSenderId: "819374433487",
  appId: "1:819374433487:web:daf6f33b86ee732522c3ba",
  measurementId: "G-WHP79HH26R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);