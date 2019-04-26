import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import firebase from "@/services/firebase";
import syncService from "@/services/sync";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit("setCurrentUser", {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    });

    return;
  }

  store.dispatch("resetState");
});

syncService.channels();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
