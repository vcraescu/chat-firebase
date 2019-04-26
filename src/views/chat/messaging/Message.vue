<template>
  <div class="message">
    <div class="small">
      <span :class="userClass" class="font-weight-bold">{{ from }}</span>
      <span class="text-secondary"> {{ displayAt }}</span>
    </div>
    <div>{{ body }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "Message",
  props: {
    from: {
      type: String,
      required: true
    },
    at: {
      type: Number,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    displayAt() {
      return moment(this.at * 1000).fromNow();
    },
    userClass() {
      return this.from === this.currentUser.email
        ? "text-success"
        : "text-primary";
    }
  }
};
</script>

<style scoped></style>
