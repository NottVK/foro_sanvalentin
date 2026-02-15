 type="module"
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
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
  const messaging = firebaseConfig.messaging();


messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "rompecabezas.jpg"
  });
});
