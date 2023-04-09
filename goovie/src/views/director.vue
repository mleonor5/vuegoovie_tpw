<template>
  <div id="app1">
    <div>
      <b-container>
        <b-row>
          <b-col>
            <b-img
              left
              style="max-height: 200px"
              :src="director.poster"
              alt="Left image"
            ></b-img>
          </b-col>
          <b-col>
            <h1>{{ director.title }}</h1>
            <p style="color: #fff8f7">Director</p>
          </b-col>
          <b-col>
            <b-button
              @click="addFavorites(director.id)"
              style="background-color: transparent; border-color: transparent"
            >
              <b-icon
                class="heart"
                icon="heart"
                font-scale="2"
                style="margin-left: 5px"
              ></b-icon>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
      <h1>Known for</h1>
      <b-container id="container3">
        <b-row>
          <b-card-group
            deck
            style="margin-top: 5px"
            v-for="(film, index) in director.films"
            :key="index"
          >
            <b-card
              tag="article"
              style="max-width: 20rem; background-color: transparent"
              class="mb-12"
              ><b-card-img :src="film.poster"></b-card-img>
              <b-card-title style="color: #fff8f7">{{
                film.title
              }}</b-card-title>
              <div v-if="film.id <= 6">
                <b-button
                  href="#"
                  id="button2"
                  @click="
                    $router.push({
                      name: 'filme',
                      params: { filmeId: film.id },
                    })
                  "
                  >View more</b-button
                >
              </div>
              <div v-else>
                <b-button
                  href="#"
                  id="button1"
                  @click="
                    $router.push({
                      name: 'serie',
                      params: { serieId: film.id },
                    })
                  "
                  >View more</b-button
                >
              </div>
            </b-card>
          </b-card-group>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Director",
  data() {
    return {
      director: [],
    };
  },
  created() {
    this.directors();
  },
  computed: {
    ...mapGetters(["getDirector"]),
  },
  methods: {
    ...mapMutations(["SET_FAVORITES_DIRECTOR"]),
    directors() {
      this.director = this.getDirector(this.$route.params.directorId);
      console.log(this.$route.params.directorId);
      console.log(this.director);
    },
    addFavorites(id) {
      this.SET_FAVORITES_DIRECTOR(id);
    },
  },
};
</script>

<style>
</style>