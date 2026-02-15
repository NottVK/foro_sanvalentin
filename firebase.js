import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmYBxuRWpIIIOLyAae9eJLzVa6RVbNtHw",
  authDomain: "vaalkev-94f3e.firebaseapp.com",
  projectId: "vaalkev-94f3e",
  storageBucket: "vaalkev-94f3e.firebasestorage.app",
  messagingSenderId: "421450061531",
  appId: "1:421450061531:web:d832bc1977905bae0b1efe"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

async function iniciarFirebase() {
  try {
    const registration = await navigator.serviceWorker.register("./firebase-messaging-sw.js");

    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const currentToken = await getToken(messaging, {
        vapidKey: "BIoVsDy4PZBw0AP6iOUGIQvX4i29X3muX-v3eEoDM1NS_HgHv8CgswymHoThYiDRPiGvi4HKixKUT5UguhW6fmI",
        serviceWorkerRegistration: registration
      });

      if (currentToken) {
        console.log("TOKEN DEL TELEFONO:");
        console.log(currentToken);
      } else {
        console.log("No se generó token");
      }
    }

  } catch (error) {
    console.error("Error registrando service worker:", error);
  }
}

iniciarFirebase();

onMessage(messaging, (payload) => {
  console.log("Mensaje recibido en primer plano:", payload);
});
