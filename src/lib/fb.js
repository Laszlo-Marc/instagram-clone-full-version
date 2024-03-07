import { initializeApp } from 'firebase/app';

const config = {
    apiKey: 'AIzaSyAMoS1EgZHF5jw-IRsfO7Z-MzHA2pXzCtI',
    authDomain: 'instagram-clone-2c9dc.firebaseapp.com',
    projectId: 'instagram-clone-2c9dc',
    storageBucket: 'instagram-clone-2c9dc.appspot.com',
    messagingSenderId: '709115381950',
    appId: '1:709115381950:web:5d8cce399f6fe44c8636ef',
};

const firebase = initializeApp(config);
const {FieldValue} = firebase.getFirestore();

export { FieldValue, firebase };

