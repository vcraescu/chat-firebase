<template>
  <div class="chat">
    <b-navbar toggleable="lg" type="dark" variant="dark" placement="sticky">
      <b-navbar-brand>Chat</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown :text="`Welcome ${displayName}`" right>
          <b-dropdown-item @click="onLogout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>

    <div class="row mt-5">
      <div class="col-lg-4">
        <Channels
          :items="channels"
          :active="activeChannel"
          @input="onChannelChange"
        />
        <Invite class="mt-3" @input="onInvite" :loading="sendingInvite" />
      </div>
      <div class="col-lg-8">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Channels from "@/views/chat/Channels";
import Invite from "@/views/chat/Invite";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Chat",
  components: { Invite, Channels },
  async created() {
    await this.createChatChannel();
    await this.getChannels();
  },
  computed: {
    ...mapGetters(["currentUser", "channels", "activeChannel"]),
    displayName() {
      return this.currentUser.displayName || "";
    }
  },
  watch: {
    $route: "resetActiveChannel"
  },
  methods: {
    ...mapActions([
      "logout",
      "createChatChannel",
      "sendChatChannelInvite",
      "getChannels"
    ]),
    ...mapMutations(["resetActiveChannel"]),
    onLogout() {
      this.logout();
      this.$router.push({ name: "login" });
    },
    onChannelChange(channel) {
      this.$router.push({
        name: "channel",
        params: { channel: channel.id }
      });
    },
    async onInvite(email) {
      try {
        this.sendingInvite = true;
        await this.sendChatChannelInvite(email);
      } finally {
        this.sendingInvite = false;
      }
    }
  },
  data() {
    return {
      sendingInvite: false
    };
  }
};
</script>
