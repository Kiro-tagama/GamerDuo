import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxVgAoumRO8vTDHJJTp_n2-rl37Qmq29o",
  authDomain: "gamerduo-251ce.firebaseapp.com",
  projectId: "gamerduo-251ce",
  storageBucket: "gamerduo-251ce.appspot.com",
  messagingSenderId: "76517276234",
  appId: "1:76517276234:web:92efd437895442233404b3",
  measurementId: "G-N5JBQC71B1"
};

export const Firebase = initializeApp(firebaseConfig);