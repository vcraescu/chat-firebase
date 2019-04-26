import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";
import {
  AUTH_EMAIL_ALREADY_IN_USE,
  AUTH_INVALID_EMAIL,
  AUTH_WEAK_PASSWORD,
  AUTH_WRONG_PASSWORD,
  AUTH_USER_NOT_FOUND
} from "@/constants/firebase-error-codes";
import authService from "@/services/auth";
import chatService from "@/services/chat";
import syncService from "@/services/sync";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
    formErrors: {
      register: {},
      login: {}
    },
    channels: [],
    activeChannel: null,
    messages: [],
    messagesIds: {}
  },
  getters: {
    registerFormErrors: ({ formErrors }) => formErrors.register,
    loginFormErrors: ({ formErrors }) => formErrors.login,
    currentUser: ({ currentUser }) => currentUser,
    isAuthenticated: ({ currentUser }) => currentUser && !!currentUser.uid,
    channels: ({ channels }) => channels,
    activeChannel: ({ activeChannel }) => activeChannel,
    defaultChannel: ({ channels, currentUser }) =>
      channels.find(channel => (channel.owner = currentUser.email)),
    messages: ({ messages }) =>
      _.sortBy(messages, message => message.timestamp),
    channelById: ({ channels }) => id =>
      channels.find(channel => channel.id === id)
  },
  mutations: {
    setRegisterFormErrors({ formErrors }, errors) {
      formErrors.register = errors;
    },
    setLoginFormErrors({ formErrors }, errors) {
      formErrors.login = errors;
    },
    resetFormErrors({ formErrors }, name = null) {
      if (!name) {
        formErrors.register = {};
        formErrors.login = {};
        return;
      }

      formErrors[name] = {};
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    resetCurrentUser(state) {
      state.currentUser = {};
    },
    setChannels(state, data) {
      state.channels = data;
    },
    setActiveChannel(state, channel) {
      state.activeChannel = channel;
    },
    resetActiveChannel(state) {
      state.activeChannel = null;
    },
    setMessages(state, messages) {
      state.messages = messages;
      state.messagesIds = {};
      messages.forEach(message => (state.messagesIds[message.id] = true));
    },
    addMessages(state, messages) {
      messages.forEach(message => {
        if (state.messagesIds[message.id]) {
          return;
        }

        state.messages.push(message);
        state.messagesIds[message.id] = message.id;
      });
    },
    resetMessages(state) {
      state.messages = {};
    }
  },
  actions: {
    resetState({ commit }) {
      commit("resetCurrentUser");
      commit("resetMessages");
      commit("setActiveChannel", null);
      commit("resetFormErrors");
    },
    async createUser({ commit }, { username, password, firstName, lastName }) {
      const fullName = `${firstName} ${lastName}`;
      try {
        commit("resetFormErrors");

        let { user } = await api.security.createUser({ username, password });
        await user.updateProfile({ displayName: fullName });

        commit("setCurrentUser", {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email
        });

        return user;
      } catch (e) {
        if (
          e.code === AUTH_EMAIL_ALREADY_IN_USE ||
          e.code === AUTH_INVALID_EMAIL
        ) {
          commit("setRegisterFormErrors", { username: e.message });
          throw e;
        }

        if (e.code === AUTH_WEAK_PASSWORD) {
          commit("setRegisterFormErrors", { password: e.message });
          throw e;
        }

        commit("setRegisterFormErrors", { $: e.message });
        throw e;
      }
    },
    async login({ commit, dispatch }, { username, password }) {
      try {
        commit("resetFormErrors");
        let { user } = await api.security.login(username, password);

        dispatch("resetState");

        commit("setCurrentUser", {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email
        });

        return user;
      } catch (e) {
        if (e.code === AUTH_INVALID_EMAIL || e.code === AUTH_USER_NOT_FOUND) {
          commit("setLoginFormErrors", { username: e.message });
          throw e;
        }

        if (e.code === AUTH_WRONG_PASSWORD) {
          commit("setLoginFormErrors", { password: e.message });
          throw e;
        }

        commit("setLoginFormErrors", { $: e.message });
        throw e;
      }
    },
    async logout({ dispatch }) {
      let res = await api.security.logout();

      dispatch("resetState");

      return res;
    },
    async getCurrentUser() {
      return await authService.currentUser();
    },
    async createChatChannel() {
      let user = await authService.currentUser();
      return await chatService.createChannelForUser(user);
    },
    async sendChatChannelInvite(context, email) {
      await chatService.invite(email);
    },
    async sendChatMessage({ getters }, message) {
      await chatService.sendMessage(getters.activeChannel.id, message);
    },
    async getChatChannelMessages({ commit }, { id }) {
      let messages = await chatService.getMessagesForChannel(id);
      syncService.messages(id);

      commit("setMessages", messages);
    },
    async getChannels({ commit }) {
      const channels = await chatService.getChannels();
      commit("setChannels", channels);

      return channels;
    },
    async getChatCurrentUser() {
      return await chatService.getCurrentUser();
    }
  }
});
