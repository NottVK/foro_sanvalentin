// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import {getMessaging,getToken,onMessage} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-messaging.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAmYBxuRWpIIIOLyAae9eJLzVa6RVbNtHw",
    authDomain: "vaalkev-94f3e.firebaseapp.com",
    projectId: "vaalkev-94f3e",
    storageBucket: "vaalkev-94f3e.firebasestorage.app",
    messagingSenderId: "421450061531",
    appId: "1:421450061531:web:d832bc1977905bae0b1efe"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const messaging =getMessaging(app);


  // Pedir permiso
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      getToken(messaging, {
        vapidKey: "BIoVsDy4PZBw0AP6iOUGIQvX4i29X3muX-v3eEoDM1NS_HgHv8CgswymHoThYiDRPiGvi4HKixKUT5UguhW6fmI"
      }).then((currentToken) => {
        if (currentToken) {
          console.log("TOKEN DEL TELEFONO:");
          console.log(currentToken);
        } else {
          console.log("No se generó token");
        }
      });
    }
  });

  onMessage(messaging, (payload) => {
    console.log("Mensaje recibido en primer plano:", payload);
  });

