<template >
  <div id="app1">
    <div v-if="serie">
      <div>
        <iframe width="900" height="315" :src="serie.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <b-container id="container1">
        <b-row>
          <b-col>
            <b-img left style="max-height: 200px" :src="serie.poster" :alt="serie.title"></b-img>
          </b-col>
          <b-col>
            <h1>{{ serie.title }}</h1>
            <p style="color: #fff8f7">{{ serie.genre.join(" | ") }}</p>
          </b-col>
          <b-col>
            <b-icon icon="star" font-scale="2" class="star"></b-icon>
            <b-button @click="addFavorites(serie.id)" style="background-color: transparent; border-color: transparent">
              <b-icon class="heart" icon="heart" font-scale="2" style="margin-left: 5px"></b-icon>
            </b-button>
            <b-button @click="addWatched(serie.id)" style="background-color: transparent; border-color: transparent">
              <b-icon class="check" icon="check-circle" font-scale="2" style="margin-left: 5px"></b-icon>
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p style="color: #fff8f7"> {{ serie.year }} | {{ serie.time }} | Seasons {{ serie.seasons }} | IMDB: {{ serie.imdbScore }}<b-icon icon="star-fill" font-scale="1" style="color: #fcd40d"></b-icon></p>
          </b-col>
          <b-col>
            <h3 id="directorh3">Director:</h3>
          </b-col>
          <b-col>
            <p v-for="(director, index) in serie.director" :key="index">
              <b-link style="color: #fff8f7" @click="$router.push({name: 'director', params: { directorId: director.id }, })">{{ director.name }}</b-link>
            </p>
          </b-col>
        </b-row>
      </b-container>
      <b-container id="container2">
        <b-row>
          <b-col>
            <h1 style="margin-left: -220px">Sipnose</h1>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-col>
            <p id="sipnose">
              {{ serie.sipnose }}
            </p>
          </b-col>
          <b-col>
            <b-table striped hover :items="items" :fields="fields" style="width: 200px; color: #fff8f7; margin-left: 300px"></b-table>
          </b-col>
        </b-row>
      </b-container>
      <b-container id="container3">
        <b-row>
          <b-col>
            <h1 style="margin-left: -300px">Cast</h1>
          </b-col>
          <b-col></b-col>
          <b-col></b-col>
        </b-row>
        <b-row>
          <b-card-group deck style="margin-top: 5px" v-for="(actor, index) in serie.actors" :key="index">
            <b-card tag="article" style="max-width: 14rem; background-color: transparent" class="mb-12">
              <b-card-img style="max-height: 200px" :src="actor.photo" :alt="actor.name"></b-card-img>
              <b-card-title style="color: #fff8f7">{{actor.name}}</b-card-title>
              <br />
              <b-button href="#" id="viewMore" class="button2" @click="$router.push({ name: 'actor', params: { actorId: actor.id } })">View more</b-button>
            </b-card>
          </b-card-group>
        </b-row>
      </b-container>
      <b-container id="container3">
        <b-row>
          <h1>Reviews</h1>
        </b-row>
        <b-form inline style="margin-top: 5px" @submit.prevent="onReview">
          <b-form-textarea id="input-1" type="text" v-model="review" style="width: 750px; background: transparent; color: #fff8f7" required placeholder="Write your opinion about the movie here..."></b-form-textarea>
          <b-button type="submit" id="buttonGame" style="margin-left: 150px">Submit</b-button>
        </b-form>
      </b-container>
      <div v-if="user">
        <div v-if="show">
          <div v-for="(comment, index) in comment" :key="index">
            <b-container id="container3">
              <b-row>
                <b-col>
                  <b-avatar size="60px" style="margin-left: -320px" :src="comment.photo"></b-avatar>
                </b-col>
                <b-col>
                  <h4 style="margin-left: -730px; color: #fff8f7">{{ comment.user }}</h4>
                </b-col>
                <b-col>
                  <b-icon v-b-modal.modal-1 icon="flag" font-scale="1" style="margin-left: -400px; color: #baa5a3"></b-icon>
                </b-col>
              </b-row>
              <b-row>
                <b-col></b-col>
                <b-col>
                  <p style="margin-left: -1390px; margin-top: -30px; color: #fff8f7; opacity: 20%;">{{ comment.date }}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col></b-col>
                <b-col>
                  <p style="margin-left: -300px; color: #fff8f7">{{ comment.review }}</p>
                </b-col>
                <b-col></b-col>
              </b-row>
            </b-container>
          </div>
          <b-modal id="modal-1" hide-footer hide-header ref="my-modal" style="background-color: #fff8f7">
            <h1>Spoiler!?</h1>
            <p class="my-4">Are you sure this comment is a spoiler?</p>
            <b-button class="mt-3" id="buttonModal" @click="hideComment()">Yes</b-button>
            <b-button class="mt-3" id="buttonModal" style="margin-left: 20px" @click="showComment()">No</b-button>
          </b-modal>
        </div>
        <div v-if="hide" id="challenges" style="max-width: 700px; margin-left: 200px; margin-top: 60px">
          <b-container fluid="sm">
            <b-row class="text-center">
              <h1 id="h1" style="padding-left: 300px">Spoiler!?</h1>
            </b-row>
            <b-row class="text-center">
              <img src="@/assets/noun-robber-2343245.webp" alt="Imagem para ocultar comentário" center style="max-height: 100px; padding-left: 320px; margin-top:20px"/>
            </b-row>
            <b-row>
              <b-button id="buttonGame" style="margin-left: 300px; margin-top: 20px" @click="showComment">See anyway</b-button>
            </b-row>
          </b-container>
        </div>
      </div>
      <div v-else-if="notuser">
        <h2>You have to be a user!</h2>
        <b-button id="buttonRegister" class="button1">
          <router-link to="/register" id="link">Registo</router-link>
        </b-button>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Serie",
  data() {
    return {
      fields: ["Where_to_watch"],
      items: [],
      serie: [],
      review: "",
      comment: "",
      show: false,
      hide: false,
      userLogged: "",
      user: false,
      notuser: false,
    };
  },
  created() {
    this.seri();
  },
  computed: {
    ...mapGetters(["getShow", "getCommentsSeries", "getLoggedUser"]),
  },
  methods: {
    ...mapMutations([
      "SET_COMMENTS_SERIES",
      "SET_FAVORITES_SERIE",
      "SET_WATCHED_SERIE",
    ]),
    seri() {
      this.serie = this.getShow(this.$route.params.serieId);
      this.items = this.serie.whereWatch;
      console.log(this.$route.params.serieId);
      console.log(this.serie);
      this.userLogged = this.getLoggedUser;
      this.show = true;
    },
    onReview() {
      if (this.userLogged) {
        this.user = true;
        this.notuser = false;
        let dt = new Date().toISOString().substr(0, 10);
        this.SET_COMMENTS_SERIES({
          idSerie: this.$route.params.serieId,
          user: this.userLogged.username,
          photo: this.userLogged.photo,
          date: dt,
          review: this.review,
        });
        console.log((this.comment = this.getCommentsSeries));
        this.show = true;
        this.hide = false;
      } else {
        this.notuser = true;
        this.user = false;
      }
      this.sortUsers();
    },
    sortUsers() {
      this.comment.sort(function (a, b) {
        if (a.user.length > b.user.length) {
          return -1;
        } else if (a.user.length < b.user.length) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    hideComment() {
      // this.$refs["my-modal"].hide();
      this.show = false;
      this.hide = true;
    },
    showComment() {
      this.show = true;
      this.hide = false;
    },
    addFavorites(id) {
      this.SET_FAVORITES_SERIE(id);
    },
    addWatched(id) {
      this.SET_WATCHED_SERIE(id);
    },
  },
};
</script>
<style>
#container1,#directorp{margin-top:10px}#container2,#container3{margin-top:60px}#directorh3{color:#baa5a3}#directorp{margin-left:-1080px;color:#fff8f7}#sipnose{text-align:justify;margin-top:5px;color:#fff8f7}
</style>