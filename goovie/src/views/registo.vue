<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <img src="../assets/background.png" alt="Background" style="max-height: 631px"/>
        </b-col>
        <b-col>
          <b-row>
            <b-col class="column">
              <h2>
                <router-link :to="{ name: 'login' }" id="linkLogin">Login</router-link>
              </h2>
            </b-col>
            <b-col class="column">
              <h1>Register</h1>
            </b-col>
          </b-row>
          <b-form @submit.prevent="register">
            <!-- Username -->
            <b-form-group id="input-group-1" label="Username" label-for="input-1">
              <b-form-input id="input-1" v-model="form.username" type="text" required></b-form-input>
            </b-form-group>
            <!-- Nacionalidade -->
            <b-form-group id="input-group-2" label="Nationality" label-for="input-2">
              <b-form-select id="input-2" v-model="form.nacionality" required>
                <b-form-select-option :value="null" disabled>Please select an option</b-form-select-option>
                <b-form-select-option v-for="(country, index) in getCountries" :key="index" :value="country.value">{{ country.text }}</b-form-select-option>
              </b-form-select>
            </b-form-group>
            <!-- Password -->
            <b-form-group id="input-group-3" label="Password" label-for="input-3">
              <b-form-input id="input-3" v-model="form.password" type="password" :state="validation" required></b-form-input>
              <b-form-invalid-feedback :state="validation"> Yourpassword must have more than 6 characters long.</b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation">Looks Good.</b-form-valid-feedback>
            </b-form-group>
            <!-- Confirm Password -->
            <b-form-group id="input-group-4" label="Confirm Password" label-for="input-4">
              <b-form-input id="input-4" v-model="form.passwordConfirm" type="password" :state="confirm" required></b-form-input>
              <b-form-invalid-feedback :state="confirm">Password is not equal.</b-form-invalid-feedback>
              <b-form-valid-feedback :state="confirm">Password is the same</b-form-valid-feedback>
            </b-form-group>
            <b-button type="submit" variant="primary" id="button">Register</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        nationality: "",
        password: "",
        passwordConfirm: "",
        type: "regular",
        points: 0,
        photo: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isUsernameAvailable"]),
    validation() {
      return this.form.password.length > 5;
    },
    confirm() {
      return this.form.password === this.form.passwordConfirm;
    },
    ...mapGetters(["getCountries"]),
  },
  methods: {
    register() {
      if (
        !this.isUsernameAvailable(this.form.username) &&
        this.form.password !== this.form.passwordConfirm
      ) {
        alert("USER AND PASSWORD ARE WRONG!");
      } else if (!this.isUsernameAvailable(this.form.username)) {
        alert("USER ALREADY EXISTS!");
      } else if (this.form.password !== this.form.passwordConfirm) {
        alert("PASSWORD WRONG!");
      } else {
        this.SET_NEW_USER(this.form), this.$router.push({ name: "login" });
      }
    },

    ...mapMutations(["SET_NEW_USER"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-family: "Anton", sans-serif;
  color: #7c766d;
}

h2 {
  font-family: "Anton", sans-serif;
}

#linkLogin {
  color: #baa5a3;
}

#input-group-1,
#input-group-2,
#input-group-3,
#input-group-4,
#button {
  font-family: "Quicksand", sans-serif;
  color: #070707;
}

#input-1,
#input-2,
#input-3,
#input-4 {
  border-color: #de2221;
}

.column {
  padding: 70px;
}

#button {
  background-color: #de2221;
  border-color: #de2221;
  color: #fef8f8;
  width: 170px;
  height: 40px;
}
</style>