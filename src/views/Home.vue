<script>
import Header from '../components/Header.vue';

export default {
  components: { 
    Header 
  },

  data() {
      return {
        Header
      }
  },

  mounted() {
    this.$refs.mycanvas.focus();
    const ctx = canvas.getContext('2d');
    
    var W = window.innerWidth;
	  var H = window.innerHeight;
	  canvas.width = W;
	  canvas.height = H;
	  var layers = [];
    layers.push({
      size: 3,
      speed: (1/2),
      count: 50,
      particules: []
    });
    layers.push({
      size: 2,
      speed: (1/4),
      count: 50,
      particules: []
    });
    layers.push({
      size: 1,
      speed: (1/8),
      count: 50,
      particules: []
    });
	
	  //Lets draw the flakes
	  function draw() {
		  ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
		  ctx.beginPath();
		  for(var l of layers) {
        for(var p of l.particules) {
          ctx.moveTo(p.x, p.y);
          var hs = l.size / 2;
          ctx.fillRect(p.x - hs, p.y - hs, hs*2, hs*2);
        }
      }
		  ctx.fill();
		  update();
	  }
	
	  function update() {
      for(var l of layers) {
        for(var p of l.particules) {
          if(p.y < 0) {
            p.y = H + 10;
          }
          p.y -= l.speed;
        }
        if(l.particules.length < l.count) {
          for(var i = 0; i < l.count; i++) {
            var particule = {
              x: Math.random() * W,
              y: Math.random() * H
            };
          l.particules.push(particule);
          }
        }
      }
	  }
	  setInterval(draw, 25);
  },

  methods: {
    redirectionButton() {
        this.$router.push('/quiz');
    }
  }
};

</script>

<template>
   <canvas id="canvas" ref="mycanvas"></canvas>
   <div class="container_first">
      <Header/>
      <div class="containerHome">
        <h1 class="title_quiz">Wizard Quiz</h1>
        <p>Bienvenue sur Wizard Quiz ! Le quiz Harry Potter pour découvrir ta maison à Poudlard. Gryffondor, 
          Poufsouffle, Serdaigle ou Serpentard ? Passe le quiz et découvre ta maison !</p>
        <button class="button_home" @click="redirectionButton">Quiz</button>
      </div>
   </div>
</template>

<style scoped>

   #canvas {
     width: 1920px;
     height: 1080px;
     background-color: #1d232a;
   }

   .container_first {
     display: flex;
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%; 
    }


   .containerHome {
     display: flex;
     flex-direction: column;
     width: 50%;
     align-items: center;
     gap: 15em;
     margin-left: 25%;
     margin-top: 5%;
     gap:30px;
   }

   .button_home {
     background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
     width: 15vw;
     height: 10vh;
     border-radius: 0.5em;
     font-size: 1.3em;
     font-weight: bold;
     color: rgb(240, 232, 232);
     border: none;
     font-family: sans-serif;
     margin-top: 100px;
     font-size: 2em;
   }

   .button_home:hover {
     box-shadow: 0px 0px 30px white;
     cursor: pointer;
   }

   .title_quiz {
     font-family: 'Reem Kufi Fun', sans-serif;
     color: rgb(240, 232, 232);
     font-size: 5em;
     border-bottom: 5px solid rgb(240, 232, 232);
     border-top: 4px solid rgb(240, 232, 232);
     padding-left: 5%;
     padding-right: 5%;
     margin-top: 10%;
   }

   p {
     color: white;
     text-align: center;
     font-size: 1.1em;
   }
 
</style>
