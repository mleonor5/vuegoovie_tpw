<template>
  <div id="app1">
    <div>
      <b-container>
        <b-row>
          <b-col>
            <b-img left style="max-height: 200px" :src="actor.poster" :alt="actor.title"></b-img>
          </b-col>
          <b-col>
            <h1>{{ actor.title }}</h1>
            <p style="color: #fff8f7">Actor</p>
          </b-col>
          <b-col>
            <b-button @click="addFavorites(actor.id)" style="background-color: transparent; border-color: transparent">
              <b-icon class="heart" icon="heart" font-scale="2" style="margin-left: 5px"></b-icon>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
      <h1>Known for</h1>
      <b-container id="container3">
        <b-row>
          <b-card-group deck style="margin-top: 5px" v-for="(film, index) in actor.films" :key="index">
            <b-card tag="article" style="max-width: 20rem; background-color: transparent" class="mb-12">
              <b-card-img :src="film.poster" :alt="film.title"></b-card-img>
              <b-card-title style="color: #fff8f7">{{film.title}}</b-card-title>
              <div v-if="film.id <= 6">
                <b-button href="#" id="viewMore" class="button2" @click="$router.push({name: 'filme', params: { filmeId: film.id },})">View more</b-button>
              </div>
              <div v-else>
                <b-button href="#" id="buttonSerie" class="button1" @click="$router.push({name: 'serie',params: { serieId: film.id },})">View more</b-button>
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
  name: "Actor",
  data() {
    return {
      actor: [],
    };
  },
  created() {
    this.actors();
  },
  computed: {
    ...mapGetters(["getActor"]),
  },
  methods: {
    ...mapMutations(["SET_FAVORITES_ACTOR"]),
    actors() {
      this.actor = this.getActor(this.$route.params.actorId);
      console.log(this.$route.params.actorId);
      console.log(this.actor);
    },
    addFavorites(id) {
      this.SET_FAVORITES_ACTOR(id);
    },
  },
};
</script>