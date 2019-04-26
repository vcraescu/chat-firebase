<template>
  <b-form class="row" @submit="onSubmit">
    <div class="col-md-8">
      <b-input type="email" :value="value" required v-model="email" />
    </div>
    <div class="col-md-4 mt-2 mt-md-0">
      <b-button type="submit" variant="success" block :disabled="!canSubmit">{{
        buttonLabel
      }}</b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  name: "Invite",
  props: {
    value: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    canSubmit() {
      return (!!this.email && this.email.length > 0) || !this.loading;
    },
    buttonLabel() {
      return this.loading ? "Sending..." : "Invite";
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (!this.canSubmit) {
        return;
      }

      this.$emit("input", this.email);
      this.email = null;
    }
  },
  data() {
    return {
      email: null
    };
  }
};
</script>
