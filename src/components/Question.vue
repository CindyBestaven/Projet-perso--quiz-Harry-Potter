<script>
import  { setScore, getScore } from '../data/scoreTotal.js';

export default {

  props: ['questions'], 
  
  data() {
    return {
      currentIndex: 0,
      userAnswer: null,
      score: 0,
      house: "",
      msgError: "",
      msgButton: "Validé",
      setScore,
      getScore,
      showButton1: true
    }
  },
  methods: {
    selectAnswer(answer) {
      this.userAnswer = answer;
      this.score = answer.answerScore,
      this.house = answer.answerHouse,
      console.log(this.house),
      console.log(this.score)
    },
    nextQuestion() {
      if (this.userAnswer != null) {
        setScore(this.house, this.score);
        this.currentIndex++;
        this.userAnswer = null;
        this.msgError = "";
        console.log(getScore())
      }
      else {
        this.msgError = "*Veuillez sélectionner une réponse"
      }

      if (Object.is(this.currentQuestion, this.questions[this.questions.length-1])) {
        this.userAnswer = null;
        this.showButton1 = false;
      }
    },
    finishQuestion() {
      if (this.userAnswer != null) {
        setScore(this.house, this.score);
        this.userAnswer = null;
        this.$router.push('/waitingchoice');
        console.log(getScore())
      }
      else {
        this.msgError = "*Veuillez sélectionner une réponse"
      }
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex];
    }
  }
}
</script>

<template>
  <div class='container-quiz'>
    <h1>{{ currentQuestion.question }}</h1>
    <button :class="{ active: userAnswer == currentQuestion.answer1}" @click='selectAnswer(currentQuestion.answer1)' >{{ currentQuestion.answer1.response1 }}</button>
    <button :class="{ active: userAnswer == currentQuestion.answer2}" @click='selectAnswer(currentQuestion.answer2)'>{{ currentQuestion.answer2.response2 }}</button>
    <button :class="{ active: userAnswer == currentQuestion.answer3}" @click='selectAnswer(currentQuestion.answer3)'>{{ currentQuestion.answer3.response3 }}</button>
    <button :class="{ active: userAnswer == currentQuestion.answer4}" @click='selectAnswer(currentQuestion.answer4)'>{{ currentQuestion.answer4.response4 }}</button>
    <button class='valid-button' v-if="showButton1" @click='nextQuestion'>Validé</button>
    <button class='valid-button' v-else @click="finishQuestion" >Validé le quiz</button>
    <p class="selectedError">{{ msgError }}</p>
  </div>
</template>


<style scoped>
    .container-quiz {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 90%;
        height: 90%;
        text-align: center;
    }

    button {
        background-color: blueviolet;
        color: white;
        border-radius: 10px;
        padding: 15px 10px;
        font-size: 1.2em;
        font-weight: bold;
        width: 500px;
      }

    button:hover {
      box-shadow: 0px 0px 13px white;
      cursor: pointer;
    }

    h1 {
        color: white;
        font-size: 1.8em;
    }

    button.valid-button {
        background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
        width: 25%;
    }

    button.active {
        background-color: rgb(74, 32, 224);
    }

    .selectedError {
        color: red;
    }
    
</style>