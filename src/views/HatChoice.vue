<script>
import  { getHouse } from '../data/scoreTotal.js';
import { result } from '../data/dataResult.js';

export default {
 
  data() {
    return {
      getHouse,
      maison: null,
      result
    }
  },
  methods: {
    getImgUrl(pet) {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + pet + ".png")
  }
  },
  
  mounted() {
    const filterResult = result.filter(maisonResult => maisonResult.maison == getHouse());
    this.maison = filterResult[0];
  }
}

</script>

<template>
  <div :class='getHouse()'>
    <div v-if="maison" class="msgContainer">
      <img :src="`/${maison.imageEcharpe}.png`" class="echarpe"/>
      <div class="container_title">
        <h1>Tu es chez <strong>{{ maison.maison }}</strong></h1> 
        <img :src="`/${maison.imageBlason}.png`" />
      </div>  
      <div class="container_content">
       <p> {{ maison.contentHouse.content1 }}</p>
       <p> {{ maison.contentHouse.content2 }}</p>
       <p> {{ maison.contentHouse.content3 }}</p>
       <p> {{ maison.contentHouse.content4 }}</p>
       <p> {{ maison.contentHouse.content5 }}</p>
      </div>  
      <img :src="`/${maison.extraitHouse}.png`" class="extrait"/>
    </div>  
  </div>
</template>



<style scoped>
  
  h1 {
    color: rgb(220, 212, 212);
    font-size: 3.5em;
    font-weight: bold;
  }
  
  p {
    color: rgb(218, 210, 210);
    font-size: 1.2em;
  }

  img {
    width: 25%;
    margin-right: 6.5%;
  }
  
  strong {
    font-size: 2.3em;
    text-shadow: 5px 5px 5px rgb(25, 19, 4);
    font-weight: bold;
    color: rgb(186, 23, 23);
    -webkit-text-stroke: 2px;
  }

  .Poufsouffle {
    width: 100vw;
    height: 100vh;
    background-color:  #c1b32f;
    overflow: auto;
  }

  .Poufsouffle strong {
    color: rgb(222, 219, 39);
    -webkit-text-stroke-color: rgb(117, 105, 95);
    text-decoration: underline overline #65645d;
  }

  .Gryffondor {
    width: 100vw;
    height: 100vh;
    background-color: #941e1e;
    overflow: auto;
  }

  .Gryffondor strong {
    color: rgb(186, 23, 23);
    -webkit-text-stroke-color: #d60;
    text-decoration: underline overline #c0ac13;
  }

  .echarpe {
    position: absolute;
    left: 73%;
    width: 22vw;
    height: 190vh;
    box-shadow: 0 0 50px 5px black;
  }
  
  .Serpentard {
    width: 100vw;
    height: 100vh;
    background-color: #26430d;
    overflow: auto;
  }

  .Serpentard strong {
    color: rgb(21, 134, 28);
    -webkit-text-stroke-color: rgb(89, 86, 83);
    text-decoration: underline overline #585856;
  }

  .Serdaigle {
    width: 100vw;
    height: 100vh;
    background-color: #142940;
    overflow: auto;
  }

  .Serdaigle strong {
    color: rgb(41, 41, 145);
    -webkit-text-stroke-color: rgb(100, 98, 96);
    text-decoration: underline overline #5e5e5b;
  }

  .container_title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15%;
    margin-left: 6%;
  }

  .container_content {
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 50px;
    margin-left: 6%;
  }

  .container_title img {
    margin-top:3%;
  }

  .extrait {
    width: 35%;
    margin-left: 35%;
    margin-top: 3%;
    margin-bottom: 3%;
  }

    

</style>
