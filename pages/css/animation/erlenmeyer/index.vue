<template>
  <div class="container erlenmeyer">
    <div class="row">
      <div class="col-22 offset-1">
        <h2>Animated erlenmeyer concept</h2>
        <p>Made: 05/2014</p>

        <div class="old_experiment_wrapper">
          <div class="anim-cooker">
            <div class="anim-golf2">
            </div>
            <div class="anim-bubbel1">
            </div>
            <div class="anim-bubbel2">
            </div>
            <div class="anim-bubbel3">
            </div>
            <div class="anim-golf1">
            </div>
            <div class="anim-html">
            </div>
            <div class="anim-css">
            </div>
            <div class="anim-voorgrond">
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
    class: 'css-erlenmeyer'
  }
})

definePageMeta({
  name: "CSS Erlenmeyer Animations",
})
</script>


<style lang="scss">
body.css-erlenmeyer {
  --page-bg: #F5F5ED;
  --page-color: black;
}

.erlenmeyer {
  margin-top: var(--header-height);
}

.old_experiment_wrapper {
  display: flex;
  justify-content: center;
}

.anim-cooker {
  background: #3A383D;
  width: 600px;
  height: 600px;
  position: relative;

  @include media-breakpoint-down(md) {
    scale: .5;
  }
}

.anim-cooker .anim-golf2 {
  position: absolute;
  left: 104px;
  top: 382px;
  background: url(img/golf1.fw.png);
  width: 401px;
  height: 147px;
  opacity: 0.6;
  -webkit-animation: anim-waves2 5s infinite;
  -moz-animation: anim-waves2 5s infinite;
  -o-animation: anim-waves2 5s infinite;
  animation: anim-waves2 5s infinite;
}

.anim-cooker .anim-bubbel1 {
  position: absolute;
  left: 230px;
  top: 255px;
  background: url(img/bubbel1.fw.png);
  width: 50px;
  height: 50px;
  -webkit-animation: anim-bubbel1 8s infinite linear;
  -moz-animation: anim-bubbel1 8s infinite linear;
  -o-animation: anim-bubbel1 8s infinite linear;
  animation: anim-bubbel1 8s infinite linear;
}

.anim-cooker .anim-bubbel2 {
  position: absolute;
  left: 301px;
  top: 324px;
  background: url(img/bubbel2.fw.png);
  width: 37px;
  height: 37px;
  -webkit-animation: anim-bubbel2 6s infinite linear;
  -moz-animation: anim-bubbel2 6s infinite linear;
  -o-animation: anim-bubbel2 6s infinite linear;
  animation: anim-bubbel2 6s infinite linear;
}

.anim-cooker .anim-bubbel3 {
  position: absolute;
  left: 294px;
  top: 183px;
  background: url(img/bubbel3.fw.png);
  width: 26px;
  height: 26px;
  -webkit-animation: anim-bubbel3 4s infinite linear;
  -moz-animation: anim-bubbel3 4s infinite linear;
  -o-animation: anim-bubbel3 4s infinite linear;
  animation: anim-bubbel3 4s infinite linear;
}

.anim-cooker .anim-golf1 {
  position: absolute;
  left: 126px;
  top: 387px;
  background: url(img/golf1.fw.png);
  width: 401px;
  height: 147px;
  -webkit-animation: anim-waves 5s infinite;
  -moz-animation: anim-waves 5s infinite;
  -o-animation: anim-waves 5s infinite;
  animation: anim-waves 5s infinite;
}

.anim-cooker .anim-voorgrond {
  position: absolute;
  left: 0;
  top: 0;
  background: url(img/voorgrond.fw.png);
  width: 600px;
  height: 600px;
}

.anim-cooker .anim-html {
  position: absolute;
  left: 217px;
  top: 423px;
  background: url(img/html.fw.png);
  width: 53px;
  height: 50px;
  -webkit-animation: anim-html 17s infinite;
  -moz-animation: anim-html 17s infinite;
  -o-animation: anim-html 17s infinite;
  animation: anim-html 17s infinite;
}

.anim-cooker .anim-css {
  position: absolute;
  left: 353px;
  top: 416px;
  background: url(img/css.fw.png);
  width: 35px;
  height: 35px;
  -webkit-animation: anim-css 17s infinite;
  -moz-animation: anim-css 17s infinite;
  -o-animation: anim-css 17s infinite;
  animation: anim-css 17s infinite;
}

@-webkit-keyframes anim-waves {
  0% {
    left: 126px;
    top: 387px;
  }

  50% {
    left: 120px;
    top: 380px;
  }

  100% {
    left: 126px;
    top: 387px;
  }
}

@-moz-keyframes anim-waves {
  0% {
    left: 126px;
    top: 387px;
  }

  50% {
    left: 120px;
    top: 380px;
  }

  100% {
    left: 126px;
    top: 387px;
  }
}

@-o-keyframes anim-waves {
  0% {
    left: 126px;
    top: 387px;
  }

  50% {
    left: 120px;
    top: 380px;
  }

  100% {
    left: 126px;
    top: 387px;
  }
}

@keyframes anim-waves {
  0% {
    left: 126px;
    top: 387px;
  }

  50% {
    left: 120px;
    top: 380px;
  }

  100% {
    left: 126px;
    top: 387px;
  }
}

@-webkit-keyframes anim-waves2 {
  0% {
    left: 104px;
    top: 382px;
  }

  50% {
    left: 115px;
    top: 378px;
  }

  100% {
    left: 104px;
    top: 382px;
  }
}

@-moz-keyframes anim-waves2 {
  0% {
    left: 104px;
    top: 382px;
  }

  50% {
    left: 115px;
    top: 378px;
  }

  100% {
    left: 104px;
    top: 382px;
  }
}

@-o-keyframes anim-waves2 {
  0% {
    left: 104px;
    top: 382px;
  }

  50% {
    left: 115px;
    top: 378px;
  }

  100% {
    left: 104px;
    top: 382px;
  }
}

@keyframes anim-waves2 {
  0% {
    left: 104px;
    top: 382px;
  }

  50% {
    left: 115px;
    top: 378px;
  }

  100% {
    left: 104px;
    top: 382px;
  }
}

@-webkit-keyframes anim-bubbel1 {
  0% {
    left: 240px;
    top: 450px;
    opacity: 1;
  }

  25% {
    left: 260px;
    top: 400px;
    opacity: 1;
  }

  50% {
    left: 250px;
    top: 350px;
    opacity: 1;
  }

  75% {
    left: 270px;
    top: 300px;
    opacity: 1;
  }

  95% {
    left: 290px;
    top: 250px;
    opacity: 0;
  }

  100% {
    left: 240px;
    top: 400px;
    opacity: 0;
  }
}

@-moz-keyframes anim-bubbel1 {
  0% {
    left: 240px;
    top: 450px;
    opacity: 1;
  }

  25% {
    left: 260px;
    top: 400px;
    opacity: 1;
  }

  50% {
    left: 250px;
    top: 350px;
    opacity: 1;
  }

  75% {
    left: 270px;
    top: 300px;
    opacity: 1;
  }

  95% {
    left: 290px;
    top: 250px;
    opacity: 0;
  }

  100% {
    left: 240px;
    top: 400px;
    opacity: 0;
  }
}

@-o-keyframes anim-bubbel1 {
  0% {
    left: 240px;
    top: 450px;
    opacity: 1;
  }

  25% {
    left: 260px;
    top: 400px;
    opacity: 1;
  }

  50% {
    left: 250px;
    top: 350px;
    opacity: 1;
  }

  75% {
    left: 270px;
    top: 300px;
    opacity: 1;
  }

  95% {
    left: 290px;
    top: 250px;
    opacity: 0;
  }

  100% {
    left: 240px;
    top: 400px;
    opacity: 0;
  }
}

@keyframes anim-bubbel1 {
  0% {
    left: 240px;
    top: 450px;
    opacity: 1;
  }

  25% {
    left: 260px;
    top: 400px;
    opacity: 1;
  }

  50% {
    left: 250px;
    top: 350px;
    opacity: 1;
  }

  75% {
    left: 270px;
    top: 300px;
    opacity: 1;
  }

  95% {
    left: 290px;
    top: 250px;
    opacity: 0;
  }

  100% {
    left: 240px;
    top: 400px;
    opacity: 0;
  }
}

@-webkit-keyframes anim-bubbel2 {
  0% {
    left: 301px;
    top: 424px;
    opacity: 1;
  }

  25% {
    left: 350px;
    top: 350px;
    opacity: 1;
  }

  50% {
    left: 340px;
    top: 300px;
    opacity: 1;
  }

  75% {
    left: 360px;
    top: 260px;
    opacity: 1;
  }

  95% {
    left: 330px;
    top: 200px;
    opacity: 0;
  }

  100% {
    left: 301px;
    top: 424px;
    opacity: 0;
  }
}

@-moz-keyframes anim-bubbel2 {
  0% {
    left: 301px;
    top: 424px;
    opacity: 1;
  }

  25% {
    left: 350px;
    top: 350px;
    opacity: 1;
  }

  50% {
    left: 340px;
    top: 300px;
    opacity: 1;
  }

  75% {
    left: 360px;
    top: 260px;
    opacity: 1;
  }

  95% {
    left: 330px;
    top: 200px;
    opacity: 0;
  }

  100% {
    left: 301px;
    top: 424px;
    opacity: 0;
  }
}

@-o-keyframes anim-bubbel2 {
  0% {
    left: 301px;
    top: 424px;
    opacity: 1;
  }

  25% {
    left: 350px;
    top: 350px;
    opacity: 1;
  }

  50% {
    left: 340px;
    top: 300px;
    opacity: 1;
  }

  75% {
    left: 360px;
    top: 260px;
    opacity: 1;
  }

  95% {
    left: 330px;
    top: 200px;
    opacity: 0;
  }

  100% {
    left: 301px;
    top: 424px;
    opacity: 0;
  }
}

@keyframes anim-bubbel2 {
  0% {
    left: 301px;
    top: 424px;
    opacity: 1;
  }

  25% {
    left: 350px;
    top: 350px;
    opacity: 1;
  }

  50% {
    left: 340px;
    top: 300px;
    opacity: 1;
  }

  75% {
    left: 360px;
    top: 260px;
    opacity: 1;
  }

  95% {
    left: 330px;
    top: 200px;
    opacity: 0;
  }

  100% {
    left: 301px;
    top: 424px;
    opacity: 0;
  }
}

@-webkit-keyframes anim-bubbel3 {
  0% {
    left: 200px;
    top: 400px;
    opacity: 1;
  }

  25% {
    left: 220px;
    top: 350px;
    opacity: 1;
  }

  50% {
    left: 210px;
    top: 300px;
    opacity: 1;
  }

  75% {
    left: 230px;
    top: 260px;
    opacity: 1;
  }

  95% {
    left: 250px;
    top: 200px;
    opacity: 0;
  }

  100% {
    left: 200px;
    top: 400px;
    opacity: 0;
  }
}

@-moz-keyframes anim-bubbel3 {
  0% {
    left: 200px;
    top: 400px;
    opacity: 1;
  }

  25% {
    left: 220px;
    top: 350px;
    opacity: 1;
  }

  50% {
    left: 210px;
    top: 300px;
    opacity: 1;
  }

  75% {
    left: 230px;
    top: 260px;
    opacity: 1;
  }

  95% {
    left: 250px;
    top: 200px;
    opacity: 0;
  }

  100% {
    left: 200px;
    top: 400px;
    opacity: 0;
  }
}

@-o-keyframes anim-bubbel3 {
  0% {
    left: 200px;
    top: 400px;
    opacity: 1;
  }

  25% {
    left: 220px;
    top: 350px;
    opacity: 1;
  }

  50% {
    left: 210px;
    top: 300px;
    opacity: 1;
  }

  75% {
    left: 230px;
    top: 260px;
    opacity: 1;
  }

  95% {
    left: 250px;
    top: 200px;
    opacity: 0;
  }

  100% {
    left: 200px;
    top: 400px;
    opacity: 0;
  }
}

@keyframes anim-bubbel3 {
  0% {
    left: 200px;
    top: 400px;
    opacity: 1;
  }

  25% {
    left: 220px;
    top: 350px;
    opacity: 1;
  }

  50% {
    left: 210px;
    top: 300px;
    opacity: 1;
  }

  75% {
    left: 230px;
    top: 260px;
    opacity: 1;
  }

  95% {
    left: 250px;
    top: 200px;
    opacity: 0;
  }

  100% {
    left: 200px;
    top: 400px;
    opacity: 0;
  }
}

@-webkit-keyframes anim-html {
  0% {
    left: 217px;
    top: 423px;
  }

  15% {
    left: 220px;
    top: 410px;
  }

  30% {
    left: 227px;
    top: 433px;
  }

  45% {
    left: 240px;
    top: 420px;
  }

  60% {
    left: 220px;
    top: 430px;
  }

  75% {
    left: 217px;
    top: 418px;
  }

  90% {
    left: 210px;
    top: 430px;
  }

  100% {
    left: 217px;
    top: 423px;
  }
}

@-moz-keyframes anim-html {
  0% {
    left: 217px;
    top: 423px;
  }

  15% {
    left: 220px;
    top: 410px;
  }

  30% {
    left: 227px;
    top: 433px;
  }

  45% {
    left: 240px;
    top: 420px;
  }

  60% {
    left: 220px;
    top: 430px;
  }

  75% {
    left: 217px;
    top: 418px;
  }

  90% {
    left: 210px;
    top: 430px;
  }

  100% {
    left: 217px;
    top: 423px;
  }
}

@-o-keyframes anim-html {
  0% {
    left: 217px;
    top: 423px;
  }

  15% {
    left: 220px;
    top: 410px;
  }

  30% {
    left: 227px;
    top: 433px;
  }

  45% {
    left: 240px;
    top: 420px;
  }

  60% {
    left: 220px;
    top: 430px;
  }

  75% {
    left: 217px;
    top: 418px;
  }

  90% {
    left: 210px;
    top: 430px;
  }

  100% {
    left: 217px;
    top: 423px;
  }
}

@keyframes anim-html {
  0% {
    left: 217px;
    top: 423px;
  }

  15% {
    left: 220px;
    top: 410px;
  }

  30% {
    left: 227px;
    top: 433px;
  }

  45% {
    left: 240px;
    top: 420px;
  }

  60% {
    left: 220px;
    top: 430px;
  }

  75% {
    left: 217px;
    top: 418px;
  }

  90% {
    left: 210px;
    top: 430px;
  }

  100% {
    left: 217px;
    top: 423px;
  }
}


@-webkit-keyframes anim-css {
  0% {
    left: 353px;
    top: 416px;
  }

  15% {
    left: 350px;
    top: 405px;
  }

  30% {
    left: 345px;
    top: 415px;
  }

  45% {
    left: 330px;
    top: 410px;
  }

  60% {
    left: 340px;
    top: 416px;
  }

  75% {
    left: 350px;
    top: 405px;
  }

  90% {
    left: 345px;
    top: 410px;
  }

  100% {
    left: 353px;
    top: 416px;
  }
}

@-moz-keyframes anim-css {
  0% {
    left: 353px;
    top: 416px;
  }

  15% {
    left: 350px;
    top: 405px;
  }

  30% {
    left: 345px;
    top: 415px;
  }

  45% {
    left: 330px;
    top: 410px;
  }

  60% {
    left: 340px;
    top: 416px;
  }

  75% {
    left: 350px;
    top: 405px;
  }

  90% {
    left: 345px;
    top: 410px;
  }

  100% {
    left: 353px;
    top: 416px;
  }
}

@-o-keyframes anim-css {
  0% {
    left: 353px;
    top: 416px;
  }

  15% {
    left: 350px;
    top: 405px;
  }

  30% {
    left: 345px;
    top: 415px;
  }

  45% {
    left: 330px;
    top: 410px;
  }

  60% {
    left: 340px;
    top: 416px;
  }

  75% {
    left: 350px;
    top: 405px;
  }

  90% {
    left: 345px;
    top: 410px;
  }

  100% {
    left: 353px;
    top: 416px;
  }
}

@keyframes anim-css {
  0% {
    left: 353px;
    top: 416px;
  }

  15% {
    left: 350px;
    top: 405px;
  }

  30% {
    left: 345px;
    top: 415px;
  }

  45% {
    left: 330px;
    top: 410px;
  }

  60% {
    left: 340px;
    top: 416px;
  }

  75% {
    left: 350px;
    top: 405px;
  }

  90% {
    left: 345px;
    top: 410px;
  }

  100% {
    left: 353px;
    top: 416px;
  }
}
</style>