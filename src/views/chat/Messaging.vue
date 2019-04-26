<template>
  <div class="messaging">
    <div>
      <div
        class="col-lg-12 messages p-3 border rounded overflow-auto"
        ref="messages"
      >
        <Message
          class="mb-2"
          v-for="message in messages"
          :key="message.id"
          :from="message.user"
          :body="message.message"
          :at="message.timestamp"
        />
      </div>
    </div>

    <b-form class="row mt-3" @submit="onSend">
      <div class="col-lg-10">
        <b-input type="text" v-model="message" block />
      </div>
      <div class="col-lg-2 pt-lg-0 pt-3">
        <b-button
          type="submit"
          variant="primary"
          block
          :disabled="!canSubmit"
          >{{ buttonLabel }}</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
import Message from "@/views/chat/messaging/Message";
export default {
  name: "Messaging",
  components: { Message },
  props: {
    channel: {
      type: Object,
      required: true
    },
    sending: {
      type: Boolean,
      required: false,
      default: false
    },
    messages: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    canSubmit() {
      return !!this.message && this.message.length > 0 && !this.sending;
    },
    buttonLabel() {
      return this.sending ? "Sending..." : "Send";
    }
  },
  methods: {
    onSend(event) {
      event.preventDefault();
      if (!this.canSubmit) {
        return;
      }

      this.$emit("input", this.message);
      this.message = null;
    }
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
      });
    }
  },
  data() {
    return {
      message: null
    };
  }
};
</script>

<style lang="scss" scoped>
.messaging {
  margin-top: 2em;
  .messages {
    height: 500px;
  }
}
</style>
