<template>
  <div id="app1">
    <div v-if="film">
      <div>
        <iframe width="900" height="315" :src="film.trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <b-container id="container1">
        <b-row>
          <b-col>
            <b-img left style="max-height: 200px" :src="film.poster" :alt="film.title"></b-img>
          </b-col>
          <b-col>
            <h1>{{ film.title }}</h1>
            <p style="color: #fff8f7">{{ film.genre.join(" | ") }}</p>
          </b-col>
          <b-col>
            <div>
              <b-icon icon="star" font-scale="2" class="star"></b-icon>
              <b-button @click="addFavorites(film.id)" style="background-color: transparent; border-color: transparent">
                <b-icon class="heart" icon="heart" font-scale="2" style="margin-left: 5px"></b-icon>
              </b-button>
              <b-button @click="addWatched(film.id)" style="background-color: transparent; border-color: transparent">
                <b-icon class="check" icon="check-circle" font-scale="2" style="margin-left: 5px"></b-icon>
              </b-button>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p style="color: #fff8f7">{{ film.year }} | {{ film.time }} | IMDB: {{ film.imdbScore}}<b-icon icon="star-fill" font-scale="1" style="color: #fcd40d"></b-icon></p>
          </b-col>
          <b-col>
            <h3 id="directorh3">Director:</h3>
          </b-col>
          <b-col>
            <p v-for="(director, index) in film.director" :key="index">
              <b-link style="color: #fff8f7" @click="$router.push({name: 'director', params: { directorId: director.id },})">{{ director.name }}</b-link>
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
          <b-col><p id="sipnose">{{ film.sipnose }}</p></b-col>
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
          <b-card-group deck style="margin-top: 5px" v-for="(actor, index) in film.actors" :key="index">
            <b-card tag="article" style="max-width: 14rem; background-color: transparent" class="mb-12">
              <b-card-img style="max-width: 150px" :src="actor.photo" :alt="actor.name"></b-card-img>
              <b-card-title style="color: #fff8f7">{{actor.name}}</b-card-title>
              <b-button href="#" id="button2" @click="$router.push({ name: 'actor', params: { actorId: actor.id } })">View more</b-button>
            </b-card>
          </b-card-group>
        </b-row>
      </b-container>
      <!-- Reviews -->
      <b-container id="container3">
        <b-row>
          <h1>Reviews</h1>
        </b-row>
        <b-form inline style="margin-top: 5px" @submit.prevent="onReview">
          <b-form-textarea id="input-1" type="text" v-model="review" style="width: 750px; background: transparent; color: #fff8f7" required placeholder="Write your opinion about the movie here..."></b-form-textarea>
          <b-button type="submit" id="buttonGame" style="margin-left: 150px">Publish</b-button>
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
                  <h4 style="margin-left: -700px; color: #fff8f7">{{ comment.user }}</h4>
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
        <b-button id="buttonRegister" class="button1"><router-link to="/register" id="link">Registo</router-link></b-button>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Film",
  data() {
    return {
      film: [],
      fields: ["Where_to_watch"],
      items: [],
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
    this.filme();
  },
  computed: {
    ...mapGetters(["getFilm", "getComments", "getLoggedUser", "isId"]),
  },
  methods: {
    ...mapMutations(["SET_COMMENTS", "SET_FAVORITES_FILM", "SET_WATCHED_FILM"]),
    filme() {
      this.film = this.getFilm(this.$route.params.filmeId);
      this.items = this.film.whereWatch;
      console.log(this.$route.params.filmeId);
      console.log(this.film);
      console.log((this.comment = this.getComments));
      this.userLogged = this.getLoggedUser;
      this.show = true;
    },
    onReview() {
      if (this.userLogged) {
        this.user = true;
        this.notuser = false;
        let dt = new Date().toISOString().substr(0, 10);
        this.SET_COMMENTS({
          idFilme: this.$route.params.filmeId,
          user: this.userLogged.username,
          photo: this.userLogged.photo,
          date: dt,
          review: this.review,
        });
        console.log((this.comment = this.getComments));
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
      this.SET_FAVORITES_FILM(id);
    },
    addWatched(id) {
      this.SET_WATCHED_FILM(id);
    },
  },
};
</script>

<style>
#buttonModal {
  width: 150px;
  margin-top: 30px;
  background-color: transparent;
  border-color: #de2221;
  border-width: 2px;
  color: #070707;
}
#buttonModal:hover {
  background-color: #de2221;
  color: #fef8f8;
}
.heart {
  color: #baa5a3;
}
.heart:hover {
  color: #ff2626;
}
.star {
  color: #baa5a3;
}
.check {
  color: #baa5a3;
}
.star:hover {
  color: #fcd40d;
}
.check:hover {
  color: #009129;
}
</style>