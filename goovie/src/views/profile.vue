<template>
  <div id="profile">
    <b-avatar size="100px" :src="getLoggedUser.photo"></b-avatar>
    <h4 id="username">{{ getLoggedUser.username }} <lang-flag :iso="getLoggedUser.location" />
    </h4>
    <p id="description">We all make choices in life, but in the end our choices make us!</p>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <p id="follow">100 followers</p>
        </b-col>
        <b-col>
          <p id="points">{{ getLoggedUser.points }} points</p>
        </b-col>
      </b-row>
    </b-container>
    <router-link to="/:profileId/:editarId">
      <b-button id="buttonEdit">EDIT ACCOUNT</b-button>
    </router-link>
    <h2>Watched Movies</h2>
    <!-- Filmes -->
    <b-container fluid="sm">
      <b-row>
        <b-card-group deck v-for="(movie, index) in watchedFilms" :key="index">
          <b-card tag="article" style="max-width: 14rem; background-color: transparent" class="mb-6">
            <b-card-img :src="movie.poster" :alt="movie.title"></b-card-img>
            <b-card-title style="color: #fff8f7">{{movie.title}}</b-card-title>
            <b-button id="viewMoreFilm" class="button2" @click="$router.push({ name: 'filme', params: { filmeId: movie.id } })">View more</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
    <h2>Watched Series</h2>
    <!-- Series -->
    <b-container fluid="sm">
      <b-row>
        <b-card-group deck v-for="(serie, index) in watchedSeries" :key="index">
          <b-card tag="article" style="max-width: 14rem; background-color: transparent" class="mb-6">
            <b-card-img :src="serie.poster" :alt="serie.title"></b-card-img>
            <b-card-title style="color: #fff8f7">{{serie.title}}</b-card-title>
            <b-button id="viewMoreSerie" class="button2" @click="$router.push({ name: 'serie', params: { serieId: serie.id } })">View more</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
    <h2>Favorites</h2>
    <!-- Filmes -->
    <b-container fluid="sm">
      <b-row>
        <b-card-group deck v-for="(favorite, index) in favorites" :key="index">
          <b-card tag="article" style="max-width: 14rem; background-color: transparent" class="mb-6">
            <b-card-img :src="favorite.poster" :alt="favourite.title"></b-card-img>
            <b-card-title style="color: #fff8f7">{{favorite.title}}</b-card-title>
            <b-button id="remove" class="button2" @click="removeFavorite(favorite.title)">Remove</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
    <h2>Badges</h2>
    <b-container class="bv-example-row" id="badgeContainer">
      <b-row>
        <b-col>
          <img src="@/assets/badgets/Car-flying.webp" alt="Futuristic badgets" center style="max-height: 100px; border-radius:50px"/>
          <p id="badgeName">Futuristic</p>
        </b-col>
        <b-col>
          <img src="@/assets/badgets/Film.webp" alt="Hawkeye badgets" center style="max-height: 100px; border-radius:50px"/>
          <p id="badgeName">Hawkeye</p>
        </b-col>
        <b-col>
          <img src="@/assets/badgets/super-herois.png" alt="Super Herois badgets" center style="max-height: 100px; border-radius:50px"/>
          <p id="badgeName">Super Herois</p>
        </b-col>
        <b-col>
          <img src="@/assets/badgets/true_detective.png" alt="True Detective badgets" center style="max-height: 100px; border-radius:50px"/>
          <p id="badgeName">True Detective</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["getMovies", "getLoggedUser"]),
    favorites() {
      return this.getLoggedUser.favorites;
    },
    watchedFilms() {
      return this.getLoggedUser.watchedFilms;
    },
    watchedSeries() {
      return this.getLoggedUser.watchedSeries;
    },
  },
  methods: {
    ...mapMutations(["SET_REMOVE_FAVORITE"]),
    removeFavorite(title) {
      this.SET_REMOVE_FAVORITE(title);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

#profile {
  padding-top: 60px;
  background-color: #070707;
}

#username {
  font-family: "Anton", sans-serif;
  padding-top: 20px;
  color: #7c766d;
}

#description,
#follow,
#points,
#badgeName {
  color: #fef8f8;
}

#buttonEdit {
  background-color: #070707;
  border-color: #de2221;
  color: #fef8f8;
  width: 170px;
  height: 40px;
}

#buttonEdit:hover {
  background-color: #de2221;
}

#follow,
#points {
  padding-bottom: 30px;
  padding-top: 20px;
}

#profile h2 {
  color: #7c766d;
  padding-top: 30px;
  padding-bottom: 30px;
}

#badgeContainer {
  padding-bottom: 40px;
}

footer {
  background-color: #fef8f8;
}
</style>