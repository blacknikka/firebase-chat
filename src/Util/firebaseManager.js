import firebase from 'firebase/app';
import 'firebase/firestore';

class firebaseManager {
  constructor () {
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
    });

    this.db = firebase.firestore();
  }

  /**
   * 会話情報をfirebaseから取得する
   */
  fetchFromFirebase () {
    return this.db.collection('chat').get();
  }

  async commitToFirebase ({comment, author, date}) {
    await this.db.collection('chat').add({
      comment,
      author,
      date: firebase.firestore.Timestamp.fromDate(date.toDate()),
    });
  }
}

export default new firebaseManager();
