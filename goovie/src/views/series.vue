<template>
  <div id="app1">
    <b-row>
      <b-col>
        <h1 style="margin-left: -200px">Series</h1>
      </b-col>
      <b-col>
        <!-- Filtro -->
        <b-dropdown id="dropdown-right" right text="Filter" variant="outline-danger" class="m-2">
          <b-dropdown-item href="#">Recents</b-dropdown-item>
          <b-dropdown-item href="#">Best Qualified</b-dropdown-item>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Drama</b-dropdown-item>
          <b-dropdown-item href="#">Animation</b-dropdown-item>
          <b-dropdown-item href="#">More</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <!-- Filmes -->
    <b-container fluid="sm">
      <b-row>
        <b-card-group deck style="margin-top: 30px" v-for="(serie, index) in series" :key="index">
          <b-card tag="article" style="max-width: 20rem; background-color: transparent" class="mb-6">
            <b-card-img :src="serie.poster" :img-alt="serie.title"></b-card-img>
            <b-card-title style="color: #fff8f7">{{serie.title}}</b-card-title>
            <b-button @click="$router.push({ name: 'serie', params: { serieId: serie.id } })" id="viewMore" class="button2">View more</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      series: "",
    };
  },
  created() {
    this.shows();
  },
  computed: {
    ...mapGetters(["getSeries"]),
  },
  methods: {
    shows() {
      this.series = this.getSeries;
      console.log(this.series);
    },
  },
};
</script>

<style>
</style>