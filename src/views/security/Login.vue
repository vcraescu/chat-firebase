<template>
  <div>
    <h5 class="display-4">Login</h5>
    <b-alert show variant="danger" v-if="formErrors.$">{{
      formErrors.$
    }}</b-alert>
    <b-form @submit="onSubmit">
      <b-form-input
        id="username"
        :state="inputState.username"
        type="email"
        v-model="form.username"
        required
        placeholder="Enter email"
      />
      <b-form-invalid-feedback v-if="formErrors.username">{{
        formErrors.username
      }}</b-form-invalid-feedback>
      <b-form-input
        class="mt-2"
        :state="inputState.password"
        id="password"
        v-model="form.password"
        type="password"
        required
        placeholder="Enter password"
      />
      <b-form-invalid-feedback v-if="formErrors.password">{{
        formErrors.password
      }}</b-form-invalid-feedback>
      <div class="mt-2">
        <b-button variant="primary" size="lg" type="submit">Login</b-button>
        <b-button
          variant="secondary"
          size="lg"
          class="ml-2"
          to="register"
          type="button"
          >Register</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "Login",
  created() {
    this.resetFormErrors();
  },
  computed: {
    ...mapGetters({
      formErrors: "loginFormErrors"
    }),
    inputState() {
      let state = {
        username: null,
        password: null
      };

      if (this.formErrors.username) {
        state.username = false;
      }
      if (this.formErrors.password) {
        state.password = false;
      }

      return state;
    }
  },
  methods: {
    ...mapMutations(["resetFormErrors"]),
    ...mapActions(["login"]),
    async onSubmit(event) {
      event.preventDefault();
      try {
        await this.login(this.form);
        this.$router.push({ name: "chat" });
      } catch (e) {
        //
      }
    }
  },
  data() {
    return {
      form: {
        username: null,
        password: null
      }
    };
  }
};
</script>
