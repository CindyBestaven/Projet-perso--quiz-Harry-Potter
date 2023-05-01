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
        this.$router.push('/hatchoice');
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
    } 
}
</script>

<template>
    <canvas id="canvas" ref="mycanvas"></canvas>
    <div class="container">
      <div class="loader"></div>
      <img src="../assets/blason_poudlard.png" alt="blason_poudlard" class="blason_poudlard">   
      <button @click="TriArray(getScore())">Découvre ta maison !</button>
    </div>
</template>

<style scoped>
  
  #canvas {
     width: 1920px;
     height: 1080px;
     background-color: #1d232a;
  }

  .container {
     display: flex;
     position: absolute;
     flex-direction: column;
     align-items: center;
     top:7%;
     left: 36%;
     gap: 50px;
  }

  img {
    position: absolute;
    width: 90%;
    top:15%;
  }

  button {
     background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
     width: 15vw;
     height: 10vh;
     border-radius: 0.5em;
     font-size: 1.3em;
     font-weight: bold;
     color: rgb(240, 232, 232);
     border: none;
     font-family: sans-serif;
     margin-left: 20px;
  }

  .loader {
    --s: 15px; 
    width: calc(25*var(--s));
    display: grid;
    aspect-ratio: 1;
    border-radius: 50%;
    margin-left:20px;
    -webkit-mask: radial-gradient(50% 50%,#0000 calc(99% - 2*var(--s)),#000 calc(101% - 2*var(--s)));
    animation: r 6s linear infinite;
  }

  .loader:before {
    content: "";
    background: conic-gradient(from 25deg,#f8a201 25%,#fa2402 0 50%,#21611e 0 75%,#182475 0);
    -webkit-mask:
      repeating-conic-gradient(#0000 0 25deg,#000 23% 25%),
      radial-gradient(var(--s) at var(--s) 50%,#000 97%,#0000) 
        left/calc(100% - 2*var(--s)) 100% repeat-x,
      radial-gradient(var(--s) at 50% var(--s),#000 97%,#0000) 
        top /100% calc(100% - 2*var(--s)) repeat-y;
  }

  @keyframes r{to{transform:rotate(1turn)}}

  button:hover {
    box-shadow: 0px 0px 30px white;
  }
  
</style>
