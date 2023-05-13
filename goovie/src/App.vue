<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="" id="navbarBackground">
        <b-navbar-brand href="#">
          <router-link to="/">
            <picture>
              <source type="image/webp" srcset="@/assets/goovie.webp">
              <source type="image/png" srcset="@/assets/goovie.png">
              <img src="@/assets/goovie.png" alt="Goovie Logo" style="height: 55px; width: 107px"/>
            </picture>
          </router-link>
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="navbar">
            <router-link to="/filmes" id="filmes" class="link">Movies</router-link>
            <router-link to="/series" id="series" class="link">Series</router-link>
            <router-link to="/quizzes" id="quizzes" class="link">Quizzes</router-link>
            <router-link to="/classifications" id="classifications" class="link">Classifications</router-link>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
              <b-icon icon="search" width="30px" height="30px"></b-icon>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link to="/profile" id="profile" class="link">
                <b-avatar width="35px" height="35px" v-if="loggedIn" :src="loggedIn.photo"></b-avatar>
                <b-icon v-else icon="person-circle" width="35px" height="35px"></b-icon>
              </router-link>
            </b-nav-item>
            <b-nav-item href="#" v-if="loggedIn" @click="setLogin()">
              <router-link to="/">
                <b-button id="logout">Logout</b-button>
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <footer id="footer">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <p>
              <router-link to="/filmes" style="color: #070707">Movies</router-link>
            </p>
            <p>
              <router-link to="/series" style="color: #070707">Series</router-link>
            </p>
            <p>Actors</p>
            <p>Director</p>
          </b-col>
          <b-col>
            <p>
              <router-link to="/classifications" style="color: #070707">Classifications</router-link>
            </p>
            <p>
              <router-link to="/quizzes" style="color: #070707">Quizzes</router-link>
            </p>
          </b-col>
          <b-col>
            <p>Search</p>
            <p>Profile</p>
          </b-col>
        </b-row>
      </b-container>
      <router-link to="/">
        <picture>
            <source type="image/webp" srcset="@/assets/goovie2.webp">
            <source type="image/png" srcset="@/assets/goovie2.png">
            <img src="@/assets/goovie2.png" alt="Goovie Logo" style="height: 55px; width: 107px"/>
          </picture>
      </router-link>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      loggedIn: "getLoggedUser",
    }),
  },
  methods: {
    ...mapActions({
      setLogin: "setLogin",
    }),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.link {
  padding: 30px;
  color: #fef8f8;
  text-decoration: none;
}
.link:hover {
  text-decoration: #de2221;
  color: #fef8f8;
  text-decoration-line: underline;
}

#navbarBackground {
  background: #070707;
}

#logout {
  background-color: #070707;
  border-color: #de2221;
  color: #fef8f8;
  width: 100px;
  height: 40px;
}

#logout:hover {
  background-color: #de2221;
}
#footer {
  bottom: 0;
}
</style>
