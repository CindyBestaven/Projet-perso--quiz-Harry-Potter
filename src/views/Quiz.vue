<script>
  import Question from '../components/Question.vue';
  import { questions } from '../data/dataQuestion.js';

  export default {
    components: {
      Question
    },

    data() {
      return {
        questions
      }
    }
  }
</script>


<template>

  <div className='container-question'>
    <div className='quiz'>
      <Question :questions='questions' />
    </div>
  </div>  
  
</template>

<style scoped>

  .quiz {
     width: 100%;
     height: 100%;
  }

  .container-question {
     display: flex;
     flex-direction: column;
     align-items: center;
     max-width: 40%;
     margin: 5% 15% 5% 30%;

  }
</style>