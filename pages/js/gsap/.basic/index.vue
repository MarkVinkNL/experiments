<template>
  <div class="stage">
    <h1>GSAP + ScrollTrigger</h1>
    <div class="box"></div>
  </div>
</template>
<script setup>

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  console.log('test')
  gsap.to('.box', {
    scrollTrigger: '.box', // start animation when ".box" enters the viewport
    x: 500
  });
});
</script>

<style scss>
.stage {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 400vh;
  background: var(--c-blue-default);
}

.box {
  position: absolute;
  top: 100vh;
  left: 50%;
  width: 20rem;
  aspect-ratio: 1;
  background: var(--c-yellow-default);
}
</style>