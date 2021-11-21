import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-LxyA9MWVsU-kNHuDEtvOWHKhmPZxspE",
  authDomain: "projeto-mvp-app-8b8be.firebaseapp.com",
  projectId: "projeto-mvp-app-8b8be",
  storageBucket: "projeto-mvp-app-8b8be.appspot.com",
  messagingSenderId: "605017614190",
  appId: "1:605017614190:web:0ecbfd2743cb255c9c437f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;