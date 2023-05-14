<template>
  <div v-if="started">
    <form @submit.prevent="submit">
      <div>
        <h1>Quizz Action</h1>
        <div>
          <p>1/ 10</p>
          <p>0<b-icon icon="controller"></b-icon></p>
          <br />
          <audio controls>
            <source src="../assets/Laser Gun.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <b-card-group>
            <b-card tag="article" style="max-width: 20rem" class="mb-12">
              <button type="submit" value="a" id="buttonA" class="button1">A. Friends</button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12">
              <button type="submit" value="b" id="buttonB" class="button1">B. Friends</button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12">
              <button type="submit" value="c" id="buttonC" class="button1">C. Friends</button>
            </b-card>
            <b-card tag="article" style="max-width: 20rem" class="mb-12">
              <button type="submit" value="d" id="buttonD" class="button1">D. Friends</button>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </form>
    <p>{{ status }}</p>
  </div>
  <div v-else>
    <b-col>
      <b-img width="600" left thumbnail src="https://nerdiano.com.br/wp-content/uploads/2019/07/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <h1>Quizz 3</h1>
      <b-button href="#" id="buttonPlay" class="button1" @click="start">Play</b-button>
      <p>{{ status }}</p>
    </b-col>
  </div>
</template>
<script>
import{mapGetters as t}from"vuex";export default{name:"App",data:()=>({rightAnswer:void 0,answer:0,status:"",started:!1}),computed:{formValid(){return+this.answer>=0},...t(["getMovies","getSeries"])},methods:{start(){this.rightAnswer=Math.ceil(10*Math.random()),console.log(this.rightAnswer),this.started=!0},submit(){if(!this.formValid)return;let{answer:t,rightAnswer:s}=this;t===s?(this.status="you got it",this.started=!1):t<s?this.status="too low":this.status="too high"}}};
</script>