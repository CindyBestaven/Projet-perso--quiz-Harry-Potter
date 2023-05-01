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
  <div className="big-container">
    <div className='container-question'>
      <div className='quiz'>
        <Question :questions='questions' />
      </div>
    </div>  
  </div>

</template>

<style scoped>

  #canvas {
     width: 1920px;
     height: 1080px;
     background-color: #1d232a;
  }

  .big-container {
     display: flex;
     position: absolute;
     justify-content: center;
     top: 10%;
     left: 40px;
     width: 100%;
     height: 100%; 
  }

</style>