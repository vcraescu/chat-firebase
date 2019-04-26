import firebase from "@/services/firebase";

const security = {
  createUser(user) {
    return firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(
        user.username,
        user.password
      );
  },
  login(username, password) {
    return firebase.auth().signInWithEmailAndPassword(username, password);
  },
  logout() {
    return firebase.auth().signOut();
  }
};

const chat = {
  createChannel(id, name, owner) {
    return firebase
      .firestore()
      .collection("channels")
      .doc(id)
      .set(
        {
          name,
          id,
          owner
        },
        { merge: true }
      );
  },
  addUserToChannel(email, channel) {
    return firebase
      .firestore()
      .collection("users")
      .doc(email)
      .set(
        {
          channels: {
            [channel]: true
          }
        },
        { merge: true }
      );
  },
  createInvite(from, to, channel) {
    return firebase
      .firestore()
      .collection("invites")
      .add({
        from,
        to,
        channel
      });
  },
  invite(email, channel) {
    return firebase
      .firestore()
      .collection("users")
      .doc(email)
      .set(
        {
          channels: {
            [channel]: true
          }
        },
        { merge: true }
      );
  },
  createMessage(user, channel, message) {
    const timestamp = Math.floor(Date.now() / 1000);

    return firebase
      .firestore()
      .collection("messages")
      .add({
        user,
        message,
        timestamp,
        channel
      });
  },
  getMessagesForChannel(channel) {
    return firebase
      .firestore()
      .collection("messages")
      .where("channel", "==", channel)
      .orderBy("timestamp", "desc")
      .limit(100)
      .get();
  },
  async getUser(email) {
    const ds = await firebase
      .firestore()
      .collection("users")
      .doc(email)
      .get();

    return ds.data();
  },
  async getChannelsByIds(channelsIds) {
    const db = firebase.firestore();
    let promises = [];

    channelsIds.forEach(async channelId => {
      const promise = new Promise(async resolve => {
        const ds = await db
          .collection("channels")
          .doc(channelId)
          .get();

        resolve(ds.data());
      });

      promises.push(promise);
    });

    return Promise.all(promises);
  }
};

export default {
  security,
  chat
};
