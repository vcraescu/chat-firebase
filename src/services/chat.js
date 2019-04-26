import api from "@/api";
import authService from "@/services/auth";

export default {
  async createChannel(id, name, owner) {
    return await api.chat.createChannel(id, name, owner.email);
  },
  async addUserToChannel(user, channelId) {
    return await api.chat.addUserToChannel(user.email, channelId);
  },
  async createChannelForUser(user) {
    await this.createChannel(user.email, user.displayName, user);
    await this.addUserToChannel(user, user.email);
  },
  async invite(email) {
    let user = await authService.currentUser();
    await api.chat.invite(email, user.email);
    await api.chat.createInvite(user.email, email, user.email);
  },
  async sendMessage(channel, message) {
    let user = await authService.currentUser();
    return await api.chat.createMessage(user.email, channel, message);
  },
  async getMessagesForChannel(channel) {
    let qs = await api.chat.getMessagesForChannel(channel);

    let messages = [];
    qs.docs.forEach(doc => {
      messages.push(Object.assign({ id: doc.id }, { ...doc.data() }));
    });

    return messages;
  },
  async getCurrentUser() {
    let user = await authService.currentUser();
    return await api.chat.getUser(user.email);
  },
  async getChannels() {
    let user = await this.getCurrentUser();
    return await api.chat.getChannelsByIds(Object.keys(user.channels));
  }
};
