// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKKiBb0GmDsC5sJCUiBJ86dFxiIfsuEZg",
  authDomain: "imovel-aval.firebaseapp.com",
  projectId: "imovel-aval",
  storageBucket: "imovel-aval.appspot.com",
  messagingSenderId: "722053773877",
  appId: "1:722053773877:web:d3d144b79b954578a40f7c",
  storageBucket: "gs://imovel-aval.appspot.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);