<template >
  <div id="app1">
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#000000" img-width="1024" img-height="350" style="max-height: 500px" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <b-carousel-slide caption="Arcane" img-height="500px" style="max-height: 500px" img-src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg" img-alt="Arcane"></b-carousel-slide>
      <b-carousel-slide style="max-height: 500px" caption="Don't Look Up" img-src="https://rollingstone.uol.com.br/media/uploads/leonardo-dicaprio-jennifer-lawrence-e-elenco-de-dont-look-up-foto-divulgacao-netflix.png" img-alt="Don't Look Up"></b-carousel-slide>
      <b-carousel-slide style="max-height: 500px" caption="Bad and Crazy" img-src="https://www.nme.com/wp-content/uploads/2021/12/bad-and-crazy-wi-ha-joon-lee-dong-wook-tvn-301221.jpg" img-alt="Bad and Crazy"></b-carousel-slide>
      <b-carousel-slide caption="Spider-Man: No Way Home" style="max-height: 500px" img-src="https://wallpaperaccess.com/full/6790562.jpg" img-alt="Spider-Man: No Way Home"></b-carousel-slide>
      <b-carousel-slide caption="The Witcher" style="max-height: 500px" img-src="https://popcultura.com.br/wp-content/uploads/2020/07/AAAABXg51hE-1qoRnsNu2KdKAQfL8k29HTDk1-gLyCyZIFNNuL3VwamMY2Xvd5YBIoWr2RfneGv4WHwVoovnVmNmwNVFuFIQ.jpg" img-alt="The Witcher"></b-carousel-slide>
    </b-carousel>
    <!-- Challenges -->
    <div id="challenges">
      <b-container fluid="sm">
        <b-row class="text-center">
          <h1 id="h1">Challenges</h1>
        </b-row>
        <b-row class="text-center">
          <p id="p">Extra games that allow you to earn more points</p></b-row>
        <b-row>
          <b-card-group deck id="grup">
            <b-card title="Quizz Action" img-src="https://nerdiano.com.br/wp-content/uploads/2019/07/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg" img-alt="Image" img-top tag="article" style="max-width: 20rem; background-color: transparent" class="mb-6">
              <b-button href="#" id="buttonAction" class="button1">
                <router-link :to="{ name: 'quizz', params: { quizzId: 'quizz' } }" style="color: #fef8f8">Play</router-link>
              </b-button>
            </b-card>
            <b-card title="Quizz 2" img-src="https://picsum.photos/600/300/?image=96" img-alt="Image" img-top tag="article" style="max-width: 20rem; background-color: transparent" class="mb-6">
              <b-button href="#" id="buttonQuizz2" class="button1">
                <router-link :to="{ name: 'quizz2', params: { quizzId: 'quizz2' } }" style="color: #fef8f8">Play</router-link>
              </b-button>
            </b-card>
            <b-card title="Quizz3" img-src="https://picsum.photos/600/300/?image=451" img-alt="Image" img-top tag="article" style="max-width: 20rem; background-color: transparent" class="mb-6">
              <b-button href="#" id="buttonQuizz3" class="button1"><router-link :to="{ name: 'quizz3', params: { quizzId: 'quizz3' } }" style="color: #fef8f8">Play</router-link>
              </b-button>
            </b-card>
          </b-card-group>
        </b-row>
      </b-container>
    </div>
    <!-- Best Qualified -->
    <b-container fluid="sm">
      <b-row class="text-center">
        <h1 id="h1">Best qualified</h1>
      </b-row>
      <b-row class="text-center">
        <p id="p2">The best Movies and Series right now</p></b-row>
      <b-row>
        <b-card-group deck v-for="(movie, index) in getMovies" :key="index" id="grup2">
          <b-card tag="article" style="max-width: 14rem; background-color: transparent" class="mb-12">
            <b-card-img :src="movie.poster"></b-card-img>
            <b-card-title style="color: #fff8f7">{{movie.title}}</b-card-title>
            <b-button href="#" id="button2" @click="$router.push({ name: 'filme', params: { filmeId: movie.id } })">View more</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
    <!-- Recents -->
    <b-container fluid="sm">
      <b-row class="text-center">
        <h1 id="h12">Recents</h1>
      </b-row>
      <b-row class="text-center">
        <p id="p3">Movies and Series streaming right now</p>
      </b-row>
      <b-row>
        <b-card-group deck v-for="(serie, index) in getSeries" :key="index" id="grup3">
          <b-card tag="article" style="max-width: 14rem; background-color: transparent" class="mb-12">
            <b-card-img :src="serie.poster"></b-card-img>
            <b-card-title style="color: #fff8f7">{{serie.title}}</b-card-title>
            <b-button href="#" id="button2" @click="$router.push({ name: 'serie', params: { serieId: serie.id } })">View more</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
    <!-- Quizz -->
    <b-container id="quizz">
      <b-row>
        <b-col>
          <b-img width="600" left thumbnail style="background-color: transparent" src="https://www.indiewire.com/wp-content/uploads/2021/11/best-film-2.jpg?w=780" alt="Image 1"></b-img>
        </b-col>
        <b-col>
          <h1>Guess the movies and shows</h1>
          <b-button href="#" id="button2">
            <router-link :to="{ name: 'game' }" style="color: #fef8f8">Play</router-link>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      slide;
    },
    onSlideEnd(slide) {
      this.sliding = false;
      slide;
    },
  },
  computed: {
    ...mapGetters(["getMovies", "getSeries"]),
  },
};
</script>

<style>
#app1 {
  background-color: #070707;
}
#h1 {
  margin-top: 50px;
  padding-left: 500px;
}
#p {
  padding-left: 410px;
  margin-top: 5px;
}
#challenges {
  background-color: #fff8f7;
}
#grup {
  padding-left: 80px;
  margin-top: 30px;
}
#h12 {
  margin-top: 50px;
  padding-left: 550px;
}
#p2 {
  padding-left: 460px;
  margin-top: 5px;
  color: #fff8f7;
}
#p3 {
  padding-left: 470px;
  margin-top: 5px;
  color: #fff8f7;
}
#grup2 {
  padding-left: 60px;
  margin-top: 30px;
}
#grup3 {
  padding-left: 60px;
  margin-top: 30px;
}
#quizz {
  margin-top: 150px;
}
#quizz h1 {
  margin-top: 100px;
}
.button1 {
  background-color: #de2221;
  border-color: #de2221;
  border-width: 2px;
  color: #fef8f8;
  width: 170px;
  height: 40px;
}
#buttonAction, #buttonQuizz2, #buttonQuizz3, #buttonGuess {
  background-color: #de2221;
  border-color: #de2221;
}
#button2 {
  background-color: transparent;
  border-color: #de2221;
  border-width: 2px;
  color: #fef8f8;
}
#button2:hover {
  background-color: #de2221;
}
</style>
