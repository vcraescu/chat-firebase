import firebase from "./firebase";

export default {
  isAuthenticated() {
    return new Promise(resolve => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(!!user);
      });
    });
  },
  currentUser() {
    return new Promise(resolve => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user);
      });
    });
  }
};
