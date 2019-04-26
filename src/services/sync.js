import firebase from "@/services/firebase";
import authService from "@/services/auth";
import store from "@/store";

let messagesUnsubscribe = () => {};

export default {
  async channels() {
    let db = firebase.firestore();
    let user = await authService.currentUser();
    if (!user) {
      return;
    }

    db.collection("users")
      .doc(user.email)
      .onSnapshot(doc => {
        const user = doc.data();
        const channelIds = Object.keys(user.channels);

        let channels = [];
        channelIds.forEach(async channelId => {
          const qs = await db
            .collection("channels")
            .where("id", "==", channelId)
            .get();

          qs.docs.forEach(doc => {
            channels.push(doc.data());
          });
        });

        store.commit("setChannels", channels);
      });
  },
  async messages(channel) {
    let db = firebase.firestore();
    messagesUnsubscribe();

    messagesUnsubscribe = db
      .collection("messages")
      .where("channel", "==", channel)
      .orderBy("timestamp", "desc")
      .limit(50)
      .onSnapshot(qs => {
        let messages = [];
        qs.docs.forEach(doc => {
          let message = Object.assign({ id: doc.id }, { ...doc.data() });
          messages.push(message);
        });

        store.commit("addMessages", messages);
      });
  }
};
