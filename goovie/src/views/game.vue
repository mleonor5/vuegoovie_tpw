<template>
  <div id="app1">
    <div v-if="started">
      <div :key="currentQuestion">
        <h1>Guess the movies and shows</h1>
        <p style="color: #fff8f7">{{ currentQuestion }} / 10</p>
        <p style="color: #fff8f7">{{ points }}<b-icon icon="controller" style="color: #fff8f7"></b-icon></p>
        <img :src="trailer.trailer" alt="Trailer" width="560" height="315" />
      </div>
      <b-form @submit.prevent="gessMovie">
        <b-form-input id="input-5" style="margin-left: 470px" type="text" v-model="answer" required placeholder="Enter the name of the movie or show..."></b-form-input>
        <b-button type="submit" id="buttonGame">Submit</b-button>
        <b-button type="reset" id="buttonGame2">Reset</b-button>
      </b-form>
    </div>
    <div v-else-if="result">
      <h1>Guess the movies and shows</h1>
      <b-col>
        <b-img style="margin-top: 60px; margin-left: 50px" width="600" left src="https://www.indiewire.com/wp-content/uploads/2021/11/best-film-2.jpg?w=780" alt="Image 1"></b-img>
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
        <router-link style="color: #fef8f8" :to="{ name: 'quizzes' }"> New game</router-link>
      </b-button>
    </div>
    <div v-else>
      <b-col>
        <b-img id="thumbnail" width="600" left src="https://www.indiewire.com/wp-content/uploads/2021/11/best-film-2.jpg?w=780" alt="Image 1"></b-img>
      </b-col>
      <b-col>
        <h1>Guess the movies and shows</h1>
        <h3 id="directorh3" style="color: #baa5a3">May the Force be with you!</h3>
        <b-button href="#" id="buttonPlay" class="button1" @click="start" v-on:click="picker" style="margin-top: 30px; width: 150px-; color: #fff8f7">Play</b-button>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </b-col>
    </div>
  </div>
</template>
<script>
import{mapGetters as t,mapMutations as e}from"vuex";export default{data:()=>({started:!1,result:!1,answer:"",trailer:"",game:[],currentQuestion:"",points:0,rigthanwers:0,text:"",questions:[]}),created(){localStorage.getItem("game")?this.game=JSON.parse(localStorage.getItem("game")):localStorage.setItem("game",JSON.stringify(this.game)),localStorage.getItem("points")||localStorage.setItem("points",JSON.stringify(this.points)),localStorage.getItem("questions")||localStorage.setItem("questions",JSON.stringify(this.questions))},computed:{...t(["getCurrentQuestion","isMovie","getPoints","getGame","getQuestions",])},methods:{...e(["SET_POINTS","SET_QUESTION","SET_MOVIE","SET_GAME"]),start(){this.started=!0,this.currentQuestion=this.getCurrentQuestion,this.game=this.getGame,this.points=this.getPoints,this.questions=this.getQuestions},picker(){if(this.currentQuestion<11){let t=Math.floor(Math.random()*this.game.length);console.log(this.trailer=this.game[t]),this.removeMovie(this.trailer)}this.currentQuestion+=1,this.points=this.getPoints,11==this.currentQuestion&&(this.result=!0,this.started=!1,this.resultsInfo()),this.SET_QUESTION({id:this.trailer.id,trailer:this.trailer.trailer,name:this.trailer.name.toLocaleLowerCase()})},removeMovie(t){let e=this.game.filter(e=>e!==t);this.game=e,localStorage.setItem("game",JSON.stringify(this.game))},gessMovie(){this.isMovie(this.answer.toLocaleLowerCase())?(this.SET_POINTS(10),this.rigthanwers+=1):this.SET_POINTS(0),this.picker()},resultsInfo(){this.rigthanwers<=30?this.text="Oh My God! <br>You need to go to the cinema!":this.rigthanwers>30&&this.rigthanwers<=60?this.text="What happen?  <br>Go watch some movies and then try again!":this.rigthanwers>60&&this.rigthanwers<=90?this.text="Very good! <br>Have another go and you'll be getting full marks!":100===this.rigthanwers&&(this.text="TOP MARKS! Nice work! <br>You're really a movie buff, good for you!"),this.SET_GAME(this.questions)}}};
</script>
<style>
#buttonGame2,#input-5{background-color:transparent}#buttonGame,#buttonGame2{width:150px;border-width:2px}#buttonGame,#buttonGame2,#input-5{margin-top:30px;border-color:#de2221;color:#fef8f8}#input-5{width:600px}#buttonGame{background-color:#de2221}#buttonGame2{margin-left:30px}#thumbnail{margin-top:60px;margin-left:50px}
</style>