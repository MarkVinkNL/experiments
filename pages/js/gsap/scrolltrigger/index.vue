<template>
  <div class="wrapper">
    <div class="stage">
      <div class="container">
        <div class="row">
          <div class="col-sm-22">
            <h1>GSAP + ScrollTrigger</h1>
          </div>
        </div>
      </div>
      <div class="box"></div>
    </div>
    <div class="next">
      <h1>Next content</h1>
    </div>
  </div>
</template>
<script setup>

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


let tl = null

onUnmounted(() => {
  tl.scrollTrigger.kill();
})

onMounted(() => {
  tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      markers: true,
      trigger: '.stage',

      pin: true, // pin the trigger element while active
      start: 'top top', // when the top of the trigger hits the top of the viewport
      end: () => { return window.innerHeight * 4 }, // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: 'labels', // snap to the closest label in the timeline
        duration: { min: 0.2, max: 2 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
      }
    }
  });

  // add animations and labels to the timeline
  tl.from('.box', { scale: 0.3, rotation: 45, autoAlpha: 1 })
    .addLabel('color')
    .from('.box', { backgroundColor: '#28a92b', autoAlpha: 1 })
    .addLabel('spin')
    .from('.box', { rotation: 360 })
    .addLabel('color2')
    .from('.box', { backgroundColor: '#990000' })
    .addLabel('vanish')
    .to('.box', { scale: 0.3, rotation: -45, autoAlpha: 0 })
    .addLabel('end')

  //need debounce!
  document.addEventListener('resize', () => tl.scrollTrigger.refresh())

  gsap.to('window', { duration: 2, scrollTo: () => { return window.innerHeight * .25 }, autoKill: true })
});
</script>

<style scss>
.wrapper {
  overflow: hidden;
}

.stage {
  padding-top: var(--header-height);
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(--c-blue-default);
  overflow: hidden;
}

.box {
  position: absolute;
  top: 100vh;
  left: 50%;
  width: 20rem;
  aspect-ratio: 1;
  background: var(--c-yellow-default);
  transform: translate3d(-50%, -100%, 0);

}

.next {
  padding: 4rem;
}
</style>