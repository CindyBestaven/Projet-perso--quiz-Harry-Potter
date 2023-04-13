<script>
import  { getHouse } from '../data/scoreTotal.js';


export default {
  data() {
    return {
      getHouse
    }
  } 
}

</script>

<template>
  <div :class="getHouse()">
    <div class="msgContainer">
      <p>Tu es chez {{ getHouse() }} !</p>
    </div>  
  </div>
</template>



<style scoped>
  
  p {
    color: black;
    font-size: 5em;
  }

  .Gryffondor {
     width: 100vw;
     height: 100vh;
     background-color: red;
    }

  .Serdaigle {
     width: 100vw;
     height: 100vh;
     background-color: blue;
  }  

  .Serpentard {
     width: 100vw;
     height: 100vh;
     background-color: green;
  } 
  
  .Poufsouffle {
     width: 100vw;
     height: 100vh;
     background-color: yellow;
  }  

    

</style>
