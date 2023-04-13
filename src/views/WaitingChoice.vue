<script>
  import { house } from '../data/scoreTotal.js';
  import  { setHouse, getScore } from '../data/scoreTotal.js';
  
  export default {
    data() {
        return {
          house,
          setHouse,
          getScore,
          max: 0
        }
    },
    methods: {
     TriArray(array) {
       for (const score in array) {
         if ( array[score] > this.max) {
           this.max= array[score];
           setHouse(score);
         }
       }
      console.log(this.max);
      console.log(this.house);
     }
    } 
}
</script>

<template>
    <div class="container"> 
        <p>Page d'attente</p>
         <router-link to="/hatchoice"><button @click="TriArray(getScore())">click</button></router-link>
    </div>
</template>

<style scoped>

</style>
