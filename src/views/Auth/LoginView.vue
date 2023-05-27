<template>
  <div class="body">
    <div class="form-container">
      <h2>Login now</h2>
      <!-- start form -->
      <form @submit.prevent>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors.emailError }"
            id="email"
            placeholder="Enter your email"
            v-model="formData.email"
          />
          <span v-if="errors.emailError" class="invalid-feedback d-flex">
            {{ errors.emailError }}
          </span>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors.passwordError }"
            id="password"
            placeholder="Enter your password"
            v-model="formData.password"
          />
          <span v-if="errors.passwordError" class="invalid-feedback d-flex">
            {{ errors.passwordError }}
          </span>
        </div>
        <button
          @click="handleSubmit()"
          type="submit"
          class="btn btn-primary my-2"
        >
          Submit
        </button>
      </form>
      <span>
        if you don't have an email
        <router-link class="loginBtn" to="/register"> click here </router-link>
      </span>
    </div>

    <router-link class="loginBtn d-none homeLocation" to="/"></router-link>
    <router-link
      class="loginBtn d-none currentLocation"
      to="/login"
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data: function () {
    return {
      formData: {
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  computed: {
    getToken: function () {
      return this.$store.getters.getToken;
    },
    getUsername: function () {
      return this.$store.getters.getUsername;
    },
    getError: function () {
      return this.$store.getters.getError;
    },
  },
  methods: {
    handleSubmit() {
      
      this.errors = {};

      if (!this.formData.email) {
        this.errors.emailError = "Email is required.";
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.emailError = "Email is invalid.";
      }
      if (!this.formData.password) {
        this.errors.passwordError = "Password is required.";
      }

      if (!Object.keys(this.errors).length) {
        this.login();
      }
    },
    isValidEmail(email) {
      // Basic email validation using regular expression
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    login: function () {

      if (!this.$store.state.authModule.error) {
        const homeLocation = document.querySelector(".homeLocation");
        homeLocation.click();
      }
      this.$store.dispatch("clearErrorFromState");

      this.$store.dispatch("login", this.formData);
    },
    
  },
};
</script>

<style scoped>
.body {
  height: 100vh;
  padding: 100px;
  background-color: #f8f9fa;
}
.form-container {
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.form-container .form-group label {
  font-weight: bold;
  color: #333;
}

.form-container .form-control {
  box-shadow: none;
}

.form-container .btn-primary {
  width: 100%;
  border-radius: 5px;
  background-color: #007bff;
  border-color: #007bff;
}

.form-container .btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.form-container .btn-primary:focus {
  box-shadow: none;
}
</style>
