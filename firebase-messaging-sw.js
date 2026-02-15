importScripts('https://www.gstatic.com/firebasejs/12.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAmYBxuRWpIIIOLyAae9eJLzVa6RVbNtHw",
  authDomain: "vaalkev-94f3e.firebaseapp.com",
  projectId: "vaalkev-94f3e",
  storageBucket: "vaalkev-94f3e.firebasestorage.app",
  messagingSenderId: "421450061531",
  appId: "1:421450061531:web:d832bc1977905bae0b1efe"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/novia.jpeg"
  });
});
