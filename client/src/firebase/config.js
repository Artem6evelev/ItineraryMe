// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRPEfT173ZfQWm3S40Z_UWA02VnzVkUGw",
  authDomain: "itineraryme-cdafc.firebaseapp.com",
  projectId: "itineraryme-cdafc",
  storageBucket: "itineraryme-cdafc.appspot.com",
  messagingSenderId: "673573877306",
  appId: "1:673573877306:web:7a8eb03b1cb15eb9e96703",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
