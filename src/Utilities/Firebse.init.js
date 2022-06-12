// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-MQn35yZdpA4uEfmVDTZITUBsber-A-Y",
    authDomain: "igc-immigration.firebaseapp.com",
    projectId: "igc-immigration",
    storageBucket: "igc-immigration.appspot.com",
    messagingSenderId: "141560049796",
    appId: "1:141560049796:web:396a9f41e227e56ca8d2d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
