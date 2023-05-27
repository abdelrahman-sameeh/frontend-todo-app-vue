<template>
  <div class="body">
    <div class="form-container">
      <h2>Register now</h2>
      <form @submit.prevent>
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.usernameError }"
            id="name"
            placeholder="Enter your name"
            v-model="formData.username"
          />
          <span v-if="errors.usernameError" class="invalid-feedback d-flex">
            {{ errors.usernameError }}
          </span>
        </div>
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
        <div class="form-group">
          <label for="confirm-password">Confirm password:</label>
          <input
            type="password"
            class="form-control"
            id="confirm-password"
            :class="{ 'is-invalid': errors.passNotEqualConfirm }"
            placeholder="Enter your confirm password"
            v-model="formData.confirmPassword"
          />
          <span
            v-if="errors.passNotEqualConfirm"
            class="invalid-feedback d-flex"
          >
            {{ errors.passNotEqualConfirm }}
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
        if you have an email
        <router-link class="loginBtn" to="/login"> click here </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data: function () {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {},
    };
  },
  computed: {
    getError: function () {
      return this.$store.getters.getError;
    },
  },
  methods: {
    handleSubmit() {
      this.errors = {};

      if (!this.formData.username) {
        this.errors.usernameError = "Name is required.";
      }
      if (!this.formData.email) {
        this.errors.emailError = "Email is required.";
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.emailError = "Email is invalid.";
      }
      if (!this.formData.password) {
        this.errors.passwordError = "Password is required.";
      }
      if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.passNotEqualConfirm = "Passwords do not match.";
      }

      if (!Object.keys(this.errors).length) {
        this.register();
      }
    },
    isValidEmail(email) {
      // Basic email validation using regular expression
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    register: function () {
      this.$store.dispatch("register", this.formData);

      if (!this.getError) {
          const loginBtn = document.querySelector(".loginBtn");
          loginBtn.click();
      }
      
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
