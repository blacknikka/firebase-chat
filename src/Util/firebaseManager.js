import firebase from 'firebase/app';
import 'firebase/firestore';

class firebaseManager {
  constructor () {
    console.log(process.env.API_KEY);
    console.log(process.env.AUTH_DOMAIN);
    console.log(process.env.PROJECT_ID);

    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
    });

    this.db = firebase.firestore();

    // db.collection('users').add({
    //   first: 'Ada',
    //   last: 'Lovelace',
    //   born: 1815
    // })
    //   .then(function (docRef) {
    //     console.log('Document written with ID: ', docRef.id);
    //   })
    //   .catch(function (error) {
    //     console.error('Error adding document: ', error);
    //   });
  }

  fetchFromFirebase () {
    this.db.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }
}

export default new firebaseManager();
