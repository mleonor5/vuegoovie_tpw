<template>
  <div v-if="started">
    <form @submit.prevent="submit">
      <div>
        <h1>Quizz 2</h1>
        <div>
          <p>1/ 10</p>
          <p>0<b-icon icon="controller"></b-icon></p>

          <br />
          <b-img
            width="600"
            thumbnail
            src="https://nerdiano.com.br/wp-content/uploads/2019/07/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg"
            alt="Image 1"
          ></b-img>
          <b-card-group>
            <b-card>
              <button type="submit" value="a" id="button1">A. Friends</button>
            </b-card>
            <b-card>
              <button type="submit" value="b" id="button1">B. Friends</button>
            </b-card>
            <b-card>
              <button type="submit" value="c" id="button1">C. Friends</button>
            </b-card>
            <b-card>
              <button type="submit" value="d" id="button1">D. Friends</button>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </form>
    <p>{{ status }}</p>
  </div>
  <div v-else>
    <b-col>
      <b-img
        width="600"
        left
        thumbnail
        src="https://nerdiano.com.br/wp-content/uploads/2019/07/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg"
        alt="Image 1"
      ></b-img>
    </b-col>
    <b-col>
      <h1>Quizz 2</h1>
      <b-button href="#" id="button1" @click="start">Play</b-button>
      <p>{{ status }}</p>
    </b-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      rightAnswer: undefined,
      answer: 0,
      status: "",
      started: false,
    };
  },
  computed: {
    formValid() {
      return +this.answer >= 0;
    },
    ...mapGetters(["getMovies", "getSeries"]),
  },
  methods: {
    start() {
      this.rightAnswer = Math.ceil(Math.random() * 10);
      console.log(this.rightAnswer);
      this.started = true;
    },
    submit() {
      if (!this.formValid) {
        return;
      }
      const { answer, rightAnswer } = this;
      if (answer === rightAnswer) {
        this.status = "you got it";
        this.started = false;
      } else if (answer < rightAnswer) {
        this.status = "too low";
      } else {
        this.status = "too high";
      }
    },
  },
};
</script>

<style>
</style>