// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDottSb1vpxmdKyMGECcFMP-DerL4y5pmc",
  authDomain: "nextauthwithfirebase.firebaseapp.com",
  projectId: "nextauthwithfirebase",
  storageBucket: "nextauthwithfirebase.appspot.com",
  messagingSenderId: "1083902721510",
  appId: "1:1083902721510:web:ca0e6f5a918eb6679d2a27",
  measurementId: "G-3EXC12J3RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app 