<template>
  <div>
    <h5 class="display-4">Register</h5>
    <b-alert show variant="danger" v-if="formErrors.$">{{
      formErrors.$
    }}</b-alert>

    <b-form @submit="onSubmit">
      <b-form-input
        id="firstName"
        type="text"
        :state="inputState.firstName"
        v-model="form.firstName"
        required
        placeholder="Enter first name"
      />
      <b-form-invalid-feedback v-if="formErrors.firstName">{{
        formErrors.firstName
      }}</b-form-invalid-feedback>
      <b-form-input
        v-model="form.lastName"
        :state="inputState.lastName"
        class="mt-2"
        id="lastName"
        type="text"
        required
        placeholder="Enter last name"
      />
      <b-form-invalid-feedback v-if="formErrors.lastName">{{
        formErrors.lastName
      }}</b-form-invalid-feedback>
      <b-form-input
        v-model="form.username"
        :state="inputState.username"
        class="mt-2"
        id="username"
        type="email"
        required
        placeholder="Enter email"
      />
      <b-form-invalid-feedback v-if="formErrors.username">{{
        formErrors.username
      }}</b-form-invalid-feedback>
      <b-form-input
        v-model="form.password"
        :state="inputState.password"
        class="mt-2"
        id="password"
        type="password"
        required
        placeholder="Enter password"
      />
      <b-form-invalid-feedback v-if="formErrors.password">{{
        formErrors.password
      }}</b-form-invalid-feedback>
      <div class="mt-2">
        <b-button type="submit" variant="primary" size="lg" class="mr-2"
          >Register</b-button
        >
        <b-button variant="secondary" size="lg" to="login" type="button"
          >Login</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  created() {
    this.resetFormErrors();
  },
  computed: {
    ...mapGetters({
      formErrors: "registerFormErrors"
    }),
    inputState() {
      let state = {
        firstName: null,
        lastName: null,
        username: null,
        password: null
      };

      if (this.formErrors.firstName) {
        state.firstName = false;
      }
      if (this.formErrors.lastName) {
        state.lastName = false;
      }
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
    ...mapActions(["createUser"]),
    async onSubmit(event) {
      event.preventDefault();

      try {
        await this.createUser(this.form);
        this.$router.push("login");
      } catch (e) {
        //
      }
    }
  },
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        username: null,
        password: null
      }
    };
  }
};
</script>
