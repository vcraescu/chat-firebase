<template>
  <Messaging
    v-if="activeChannel"
    :channel="activeChannel"
    :sending="sendingMessage"
    :messages="messages"
    @input="onSendMessage"
  />
</template>

<script>
import Messaging from "@/views/chat/Messaging";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Channel",
  components: { Messaging },
  computed: {
    ...mapGetters([
      "currentUser",
      "channels",
      "activeChannel",
      "messages",
      "channelById"
    ])
  },
  created() {
    this.init();
  },
  watch: {
    $route: "init"
  },
  methods: {
    ...mapMutations(["setActiveChannel", "resetMessages"]),
    ...mapActions(["sendChatMessage", "getChatChannelMessages", "getChannels"]),
    async init() {
      this.resetMessages();
      await this.getChannels();
      const channel = this.channelById(this.$route.params.channel);
      if (!channel) {
        this.$router.push({ name: "chat" });
        return;
      }

      this.setActiveChannel(channel);
      this.getChatChannelMessages(channel);
    },
    async onSendMessage(message) {
      try {
        this.sendingMessage = true;
        await this.sendChatMessage(message);
      } finally {
        this.sendingMessage = false;
      }
    }
  },
  data() {
    return {
      sendingMessage: false
    };
  }
};
</script>
