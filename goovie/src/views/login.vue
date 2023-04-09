<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <img
            src="../assets/background.png"
            alt=""
            style="max-height: 631px"
          />
          <!-- <b-img src="@/assets/logo.png"></b-img> -->
        </b-col>
        <b-col>
          <b-row>
            <b-col class="column">
              <h1>Login</h1>
            </b-col>
            <b-col class="column">
              <h2>
                <router-link :to="{ name: 'register' }" id="linkRegister"
                  >Register</router-link
                >
              </h2>
            </b-col>
          </b-row>
          <b-form @submit.prevent="login">
            <!-- Username -->
            <b-form-group
              id="input-group-1"
              label="Username"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="username"
                type="text"
                required
              ></b-form-input>
            </b-form-group>
            <!-- Password -->
            <b-form-group
              id="input-group-3"
              label="Password"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="password"
                type="password"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" id="button">Login</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["isUser"]),
  },
  methods: {
    login() {
      if (this.isUser(this.username, this.password)) {
        this.SET_LOGGED_USER(this.username);
        this.$router.push({ name: "Home" });
      } else {
        alert("USER NOT FOUND!");
      }
    },
    ...mapMutations(["SET_LOGGED_USER"]),
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

#linkRegister {
  color: #baa5a3;
}

#input-1,
#input-3 {
  border-color: #de2221;
}

#input-group-1,
#input-group-3,
#button {
  font-family: "Quicksand", sans-serif;
  color: #070707;
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