<script>
import  { getHouse } from '../data/scoreTotal.js';
import { result } from '../data/dataResult.js';

export default {
 
  data() {
    return {
      getHouse,
      maisons: "Poufsouffle",
      result,
      index: 0
    }
  },
  methods: {
    resultIndex() {
      if (getHouse() == "Gryffondor") {
        this.index = 1;
        return this.index
      }
      else if (getHouse() == "Poufsouffle") {
        this.index = 2;
        return this.index
      }
      else if (getHouse() == "Serpentard") {
        this.indexHouse = 3;
        return this.index
      }
      else if (getHouse() == "Serdaigle") {
        this.index = 4;
        return this.index
      }
    }
  },
  computed: {
    currentQuestion() {
      return this.result[this.index];
    }
  }
}

</script>

<template>
  <div class='container_result'>
    <div class="msgContainer">
      <p>Tu es chez {{ currentQuestion.maison }} !</p> 
     </div>  
  </div>
</template>



<style scoped>
  
  p {
    color: black;
    font-size: 5em;
  }

  .Gryffondor {
      width: 300px;
      height: 300px;
      color: #ad1643
    }

  .Serdaigle {
     width: 300px;
     height: 300px;
  }  

  .Serpentard {
     width: 500px;
     height: 500px;
  } 
  
  .Poufsouffle {
     
     width: 500px;
     height: 500px;
  }  

    

</style>
