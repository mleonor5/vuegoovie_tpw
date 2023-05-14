<template>
  <div id="app1">
    <div v-if="started">
      <div :key="currentQuestion">
        <h1>Quizz Action</h1>
        <p style="color: #fff8f7">{{ currentQuestion }} / 10</p>
        <p style="color: #fff8f7">{{ points }}<b-icon icon="controller" style="color: #fff8f7"></b-icon>
        </p>
        <p style="color: #fff8f7">{{ trailer.sipnose }}</p>
      </div>
      <b-form @submit.prevent="gessMovie">
        <b-form-input id="input-5" style="margin-left: 470px" type="text" v-model="answer" required placeholder="Enter the name of the movie or show..."></b-form-input>
        <b-button type="submit" id="buttonGame">Submit</b-button>
        <b-button type="reset" id="buttonGame2">Reset</b-button>
      </b-form>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
    <div v-else-if="result">
      <h1>Quizz Action</h1>
      <b-col>
        <b-img style="margin-top: 60px; margin-left: 50px" width="600" left src="https://nerdiano.com.br/wp-content/uploads/2019/07/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg" alt="Image 1"></b-img>
      </b-col>
      <b-col>
        <p style="color: #fff8f7; margin-top: 100px">
          <a style="color: #de2221; font-size: 30px">{{ rigthanwers }}</a> / 10
        </p>
        <h3 style="color: #baa5a3; margin-top: 50px; font-size: 30px" v-html="text"></h3>
        <p style="color: #fff8f7; margin-top: 50px">
          <b-icon icon="controller" font-scale="1.5" style="color: #fff8f7; margin-right: 10px"></b-icon>
          <a style="color: #de2221; font-size: 30px">{{ points }}</a> / 100
        </p>
      </b-col>
      <b-button href="#" id="buttonGame" @click="start" v-on:click="picker" style="margin-top: 50px">Play again</b-button>
      <b-button href="#" id="buttonGame2" style="margin-top: 50px">
        <router-link style="color: #fef8f8" :to="{ name: 'quizzes' }">New game</router-link>
      </b-button>
      <br /><br /><br /><br /><br /><br /><br />
    </div>
    <div v-else>
      <b-col>
        <b-img id="thumbnail" width="600" left src="https://nerdiano.com.br/wp-content/uploads/2019/07/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg" alt="Thumbnail quizz"></b-img>
      </b-col>
      <b-col>
        <h1>Quizz Action</h1>
        <h3 id="directorh3">Dogde This!</h3>
        <b-button href="#" id="buttonPlay" class="button1" v-on:click="picker" style="margin-top: 30px; width: 150px">Play</b-button>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </b-col>
    </div>
  </div>
</template>
<script>
import{mapGetters as t,mapMutations as i}from"vuex";export default{data:()=>({started:!1,result:!1,answer:"",trailer:"",game:[],currentQuestion:"",points:0,rigthanwers:0,text:"",questions:[]}),created(){localStorage.getItem("quizz")?this.game=JSON.parse(localStorage.getItem("quizz")):localStorage.setItem("quizz",JSON.stringify(this.game)),localStorage.getItem("pointsQuizz")||localStorage.setItem("pointsQuizz",JSON.stringify(this.points)),localStorage.getItem("questionsQuizz")||localStorage.setItem("questionsQuizz",JSON.stringify(this.questions))},computed:{...t(["getCurrentQuestion","isFilm","getPointsQuizz","getQuizz","getQuestionsQuizz",])},methods:{...i(["SET_POINTS_QUIZZ","SET_QUESTION_QUIZZ","SET_MOVIE","SET_QUIZZ",]),start(){this.started=!0,this.currentQuestion=this.getCurrentQuestion,this.game=this.getQuizz,this.points=this.getPointsQuizz,this.questions=this.getQuestionsQuizz},picker(){if(this.currentQuestion<11){let t=Math.floor(Math.random()*this.game.length);console.log(this.trailer=this.game[t]),this.removeMovie(this.trailer)}this.currentQuestion+=1,this.points=this.getPointsQuizz,11==this.currentQuestion&&(this.result=!0,this.started=!1,this.resultsInfo()),this.SET_QUESTION_QUIZZ({id:this.trailer.id,sipnose:this.trailer.sipnose,name:this.trailer.name.toLocaleLowerCase()})},removeMovie(t){let i=this.game.filter(i=>i!==t);this.game=i,localStorage.setItem("game",JSON.stringify(this.game))},gessMovie(){this.isFilm(this.answer.toLocaleLowerCase())?(this.SET_POINTS_QUIZZ(10),this.rigthanwers+=1,console.log(this.rigthanwers)):this.SET_POINTS_QUIZZ(0),this.picker()},resultsInfo(){this.rigthanwerss<=30?this.text="Oh My God! <br>Are You Not Entertained?":this.rigthanwers>30&&this.rigthanwers<=60?this.text="What happen?  <br>Go watch some movies and then try again!":this.rigthanwers>60&&this.rigthanwers<=90?this.text="Very good! <br>Have another go and you'll be getting full marks!":100===this.rigthanwers&&(this.text="TOP MARKS! Nice work! <br>You're really a movie buff, good for you!"),this.SET_QUIZZ(this.questions)}}};
</script>