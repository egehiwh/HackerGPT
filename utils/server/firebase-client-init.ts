import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';

const firebaseConfig = {
        apiKey: "AIzaSyBlDFEyPEV30OXw96rcbhxYt7KcaMpgL9U",
        authDomain: "su-academic-study.firebaseapp.com",
        projectId: "su-academic-study",
        storageBucket: "su-academic-study.appspot.com",
        messagingSenderId: "65311226535",
        appId: "1:65311226535:web:566ec95c522df1c66e7982",
        measurementId: "G-XSHZY78LJ0"
    };

let app: firebase.app.App;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const initFirebaseApp = () => {
  return app;
};

export const db = app.firestore();
export const auth = app.auth();
export const functions = app.functions();
export default firebase;


