<template>
  <div v-if="started">
    <form @submit.prevent="submit">
      <div>
        <h1>Quizz 2</h1>
        <div>
          <p>1/ 10</p>
          <p>0<b-icon icon="controller"></b-icon></p>
          <br />
          <b-img width="600" thumbnail src="https://nerdiano.com.br/wp-content/uploads/2019/07/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg" alt="Image 1"></b-img>
          <b-card-group>
            <b-card>
              <button type="submit" value="a" id="buttonA" class="button1">A. Friends</button>
            </b-card>
            <b-card>
              <button type="submit" value="b" id="buttonB" class="button1">B. Friends</button>
            </b-card>
            <b-card>
              <button type="submit" value="c" id="buttonC" class="button1">C. Friends</button>
            </b-card>
            <b-card>
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
      <h1>Quizz 2</h1>
      <b-button href="#" id="buttonPlay" class="button1" @click="start">Play</b-button>
      <p>{{ status }}</p>
    </b-col>
  </div>
</template>
<script>
import{mapGetters as t,mapMutations as i}from"vuex";export default{data:()=>({started:!1,result:!1,answer:"",trailer:"",game:[],currentQuestion:"",points:0,rigthanwers:0,text:"",questions:[]}),created(){localStorage.getItem("quizz")?this.game=JSON.parse(localStorage.getItem("quizz")):localStorage.setItem("quizz",JSON.stringify(this.game)),localStorage.getItem("pointsQuizz")||localStorage.setItem("pointsQuizz",JSON.stringify(this.points)),localStorage.getItem("questionsQuizz")||localStorage.setItem("questionsQuizz",JSON.stringify(this.questions))},computed:{...t(["getCurrentQuestion","isFilm","getPointsQuizz","getQuizz","getQuestionsQuizz",])},methods:{...i(["SET_POINTS_QUIZZ","SET_QUESTION_QUIZZ","SET_MOVIE","SET_QUIZZ",]),start(){this.started=!0,this.currentQuestion=this.getCurrentQuestion,this.game=this.getQuizz,this.points=this.getPointsQuizz,this.questions=this.getQuestionsQuizz},picker(){if(this.currentQuestion<11){let t=Math.floor(Math.random()*this.game.length);console.log(this.trailer=this.game[t]),this.removeMovie(this.trailer)}this.currentQuestion+=1,this.points=this.getPointsQuizz,11==this.currentQuestion&&(this.result=!0,this.started=!1,this.resultsInfo()),this.SET_QUESTION_QUIZZ({id:this.trailer.id,sipnose:this.trailer.sipnose,name:this.trailer.name.toLocaleLowerCase()})},removeMovie(t){let i=this.game.filter(i=>i!==t);this.game=i,localStorage.setItem("game",JSON.stringify(this.game))},gessMovie(){this.isFilm(this.answer.toLocaleLowerCase())?(this.SET_POINTS_QUIZZ(10),this.rigthanwers+=1,console.log(this.rigthanwers)):this.SET_POINTS_QUIZZ(0),this.picker()},resultsInfo(){this.rigthanwerss<=30?this.text="Oh My God! <br>Are You Not Entertained?":this.rigthanwers>30&&this.rigthanwers<=60?this.text="What happen?  <br>Go watch some movies and then try again!":this.rigthanwers>60&&this.rigthanwers<=90?this.text="Very good! <br>Have another go and you'll be getting full marks!":100===this.rigthanwers&&(this.text="TOP MARKS! Nice work! <br>You're really a movie buff, good for you!"),this.SET_QUIZZ(this.questions)}}};
</script>