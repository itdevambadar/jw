importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyD2-D3OBuNmzM--nMc9XL0uTgIRVnUiBLg",
    authDomain: "afms-push.firebaseapp.com",
    projectId: "afms-push",
    storageBucket: "afms-push.appspot.com",
    messagingSenderId: "44681264857",
    appId: "1:44681264857:web:bb401b90307a419490c8c8",
    measurementId: "G-R51XK6L8S4"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});