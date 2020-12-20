import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDXtuDew0iyyvO1fG9AweAHa3Ggxf5aKvE",
    authDomain: "edux-d7b18.firebaseapp.com",
    projectId: "edux-d7b18",
    storageBucket: "edux-d7b18.appspot.com",
    messagingSenderId: "218473544168",
    appId: "1:218473544168:web:de65244bbdb053c5504c5d"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export const storage = app.storage();

  export default firebaseConfig;