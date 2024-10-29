<template>
  <div class="container pencil">
    <div class="row">
      <div class="col-22 offset-1">
        <h2>Animated pencil concept</h2>
        <p>Made: 05/2014</p>
        <div class="old_experiment_wrapper">
          <div class="anim-potlood-container">
            <div class="potlood-container">
              <div class="lijnen"></div>
              <div class="bal1"></div>
              <div class="bal2"></div>
              <div class="bal3"></div>
              <div class="bal4"></div>
              <div class="bal5"></div>
              <div class="bal6"></div>
              <div class="bal7"></div>
              <div class="bal8"></div>
              <div class="bal9"></div>
              <div class="bal10"></div>
              <div class="bal11"></div>
              <div class="bal12"></div>
              <div class="bal13"></div>
              <div class="bal14"></div>
              <div class="punt"></div>
            </div>
            <div class="schaduw"></div>
            <div class="text">
              <span class="titel1">
                Dynamisch
              </span>
              <span class="titel2">
                DESIGN
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class: 'css-pencil'
  }
})
</script>


<style lang="scss">
body.css-pencil {
  --page-bg: #F5F5ED;
  --page-color: black;
}

.pencil {
  margin-top: var(--header-height);
}

.old_experiment_wrapper {
  display: flex;
  justify-content: center;
}

.anim-potlood-container {
  position: relative;
  width: 566px;
  height: 618px;

  @include media-breakpoint-down(md) {
    scale: .5;
  }
}

.anim-potlood-container:hover div {
  -webkit-animation-play-state: paused;
}

.potlood-container {
  position: relative;
  width: 566px;
  height: 618px;
  animation: float 8s ease infinite;
  -moz-animation: float 8s ease infinite;
  -o-animation: float 8s ease infinite;
  -webkit-animation: float 8s ease infinite;
}

.potlood-container .lijnen {
  position: absolute;
  left: 120px;
  top: 0;
  width: 407px;
  height: 417px;
  background: url(img/lijnen.fw.png);
}

.potlood-container .bal1 {
  position: absolute;
  left: 198px;
  top: 382px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #6F2424;
  animation: wiggle 2s 1.5s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.5s ease-in-out infinite;
  -o-animation: wiggle 2s 1.5s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.5s ease-in-out infinite;
}

.potlood-container .bal2 {
  position: absolute;
  left: 122px;
  top: 316px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #B53C3C;
  animation: wiggle 2s 1.2s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.2s ease-in-out infinite;
  -o-animation: wiggle 2s 1.2s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.2s ease-in-out infinite;
}

.potlood-container .bal3 {
  position: absolute;
  left: 181px;
  top: 346px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #A54747;
  animation: wiggle 2s 1.7s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.7s ease-in-out infinite;
  -o-animation: wiggle 2s 1.7s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.7s ease-in-out infinite;
}

.potlood-container .bal4 {
  position: absolute;
  left: 224px;
  top: 314px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #905454;
  animation: wiggle 2s 1.1s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.1s ease-in-out infinite;
  -o-animation: wiggle 2s 1.1s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.1s ease-in-out infinite;
}

.potlood-container .bal5 {
  position: absolute;
  left: 180px;
  top: 277px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #905454;
  animation: wiggle 2s 1.8s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.8s ease-in-out infinite;
  -o-animation: wiggle 2s 1.8s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.8s ease-in-out infinite;
}

.potlood-container .bal6 {
  position: absolute;
  left: 307px;
  top: 280px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #746767;
  animation: wiggle 2s 1.4s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.4s ease-in-out infinite;
  -o-animation: wiggle 2s 1.4s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.4s ease-in-out infinite;
}

.potlood-container .bal7 {
  position: absolute;
  left: 219px;
  top: 214px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #746767;
  animation: wiggle 2s 1.9s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.9s ease-in-out infinite;
  -o-animation: wiggle 2s 1.9s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.9s ease-in-out infinite;
}

.potlood-container .bal8 {
  position: absolute;
  left: 322px;
  top: 191px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #527C7C;
  animation: wiggle 2s 1.5s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.5s ease-in-out infinite;
  -o-animation: wiggle 2s 1.5s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.5s ease-in-out infinite;
}

.potlood-container .bal9 {
  position: absolute;
  left: 316px;
  top: 127px;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background: #418888;
  animation: wiggle 2s 1.3s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.3s ease-in-out infinite;
  -o-animation: wiggle 2s 1.3s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.3s ease-in-out infinite;
}

.potlood-container .bal10 {
  position: absolute;
  left: 411px;
  top: 165px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #368F8F;
  animation: wiggle 2s 1.6s ease-in-out infinite;
  -moz-animation: wiggle 2s 1.6s ease-in-out infinite;
  -o-animation: wiggle 2s 1.6s ease-in-out infinite;
  -webkit-animation: wiggle 2s 1.6s ease-in-out infinite;
}

.potlood-container .bal11 {
  position: absolute;
  left: 410px;
  top: 90px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #209D9D;
  animation: wiggle 2s 0.9s ease-in-out infinite;
  -moz-animation: wiggle 2s 0.9s ease-in-out infinite;
  -o-animation: wiggle 2s 0.9s ease-in-out infinite;
  -webkit-animation: wiggle 2s 0.9s ease-in-out infinite;
}

.potlood-container .bal12 {
  position: absolute;
  left: 367px;
  top: 73px;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: #249A9A;
  animation: wiggle 2s 0.6s ease-in-out infinite;
  -moz-animation: wiggle 2s 0.6s ease-in-out infinite;
  -o-animation: wiggle 2s 0.6s ease-in-out infinite;
  -webkit-animation: wiggle 2s 0.6s ease-in-out infinite;
}

.potlood-container .bal13 {
  position: absolute;
  left: 470px;
  top: 69px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #01B1B1;
  animation: wiggle 2s ease-in-out infinite;
  -moz-animation: wiggle 2s ease-in-out infinite;
  -o-animation: wiggle 2s ease-in-out infinite;
  -webkit-animation: wiggle 2s ease-in-out infinite;
}

.potlood-container .bal14 {
  position: absolute;
  left: 419px;
  top: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #01B1B1;
  animation: wiggle 2s 0.2s ease-in-out infinite;
  -moz-animation: wiggle 2s 0.2s ease-in-out infinite;
  -o-animation: wiggle 2s 0.2s ease-in-out infinite;
  -webkit-animation: wiggle 2s 0.2s ease-in-out infinite;
}

.potlood-container .punt {
  position: absolute;
  left: 18px;
  top: 350px;
  width: 184px;
  height: 187px;
  background: url(img/punt.fw.png);
}

.anim-potlood-container .schaduw {
  position: absolute;
  left: 18px;
  top: 585px;
  width: 535px;
  height: 14px;
  background: url(img/schaduw.fw.png);

  -webkit-transform-origin: 0% 50%;

  animation: shrink 8s ease infinite;
  -moz-animation: shrink 8s ease infinite;
  -o-animation: shrink 8s ease infinite;
  -webkit-animation: shrink 8s ease infinite;
}

.anim-potlood-container .text {
  position: absolute;
  left: 265px;
  top: 410px;
  width: 250px;
  height: 130px;
  text-align: right;
  color: #000;
  font-family: Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.anim-potlood-container .text .titel1 {
  font-size: 30px;
  font-weight: bold;
  display: block;
  color: #209D9D;
}

.anim-potlood-container .text .titel2 {
  font-size: 60px;
  font-weight: bold;
  display: block;
  color: #B53C3C;
}

@keyframes wiggle {
  0% {
    transform: translate(0px, 0px);
  }

  20% {
    transform: translate(1px, 1px);
  }

  40% {
    transform: translate(-1px, -1px);
  }

  60% {
    transform: translate(-1px, 1px);
  }

  80% {
    transform: translate(1px, -1px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

@-moz-keyframes wiggle {
  0% {
    -moz-transform: translate(0px, 0px);
  }

  20% {
    -moz-transform: translate(1px, 1px);
  }

  40% {
    -moz-transform: translate(-1px, -1px);
  }

  60% {
    -moz-transform: translate(-1px, 1px);
  }

  80% {
    -moz-transform: translate(1px, -1px);
  }

  100% {
    -moz-transform: translate(0px, 0px);
  }
}

@-o-keyframes wiggle {
  0% {
    -o-transform: translate(0px, 0px);
  }

  20% {
    -o-transform: translate(1px, 1px);
  }

  40% {
    -o-transform: translate(-1px, -1px);
  }

  60% {
    -o-transform: translate(-1px, 1px);
  }

  80% {
    -o-transform: translate(1px, -1px);
  }

  100% {
    -o-transform: translate(0px, 0px);
  }
}

@-webkit-keyframes wiggle {
  0% {
    -webkit-transform: translate(0px, 0px);
  }

  20% {
    -webkit-transform: translate(1px, 1px);
  }

  40% {
    -webkit-transform: translate(-1px, -1px);
  }

  60% {
    -webkit-transform: translate(-1px, 1px);
  }

  80% {
    -webkit-transform: translate(1px, -1px);
  }

  100% {
    -webkit-transform: translate(0px, 0px);
  }
}

@keyframes float {
  0% {
    transform: translate(0px, 0px);
  }

  80% {
    transform: translate(5px, -20px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

@-moz-keyframes float {
  0% {
    -moz-transform: translate(0px, 0px);
  }

  50% {
    -moz-transform: translate(-5px, 30px);
  }

  100% {
    -moz-transform: translate(0px, 0px);
  }
}

@-o-keyframes float {
  0% {
    -o-transform: translate(0px, 0px);
  }

  50% {
    -o-transform: translate(-5px, 30px);
  }

  100% {
    -o-transform: translate(0px, 0px);
  }
}

@-webkit-keyframes float {
  0% {
    -webkit-transform: translate(0px, 0px);
  }

  50% {
    -webkit-transform: translate(-5px, 30px);
  }

  100% {
    -webkit-transform: translate(0px, 0px);
  }
}

@-webkit-keyframes shrink {
  0% {
    -webkit-transform: scale(1, 1) translate(0px, 0px);
  }

  50% {
    -webkit-transform: scale(0.9, 1) translate(-5px, 0px);
  }

  100% {
    -webkit-transform: scale(1, 1) translate(0px, 0px);
  }
}
</style>