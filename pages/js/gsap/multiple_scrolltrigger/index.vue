<template>
  <div class="wrapper">
    <div class="stage">
      <div class="sqsp-hero">

        <div class="content">
          <div class="row">
            <div class="col-sm-6 offset-sm-10">
              <div class="block block-1"></div>
            </div>
            <div class="col-sm-6 offset-sm-2">
              <div class="block block-2"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 offset-sm-2">
              <div class="block block-3"></div>
            </div>
            <div class="col-sm-8">
              <div class="text">
                <h1>ScrollTrigger rebuild test</h1>
                <p>Quick tryout to build a mockup of https://squareup.com/us/en/why-square</p>
              </div>
            </div>
            <div class="col-sm-6 offset-sm-1">
              <div class="block block-4"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="block block-5"></div>
            </div>
            <div class="col-sm-6">
              <div class="block block-6"></div>
            </div>
            <div class="col-sm-6">
              <div class="block block-7"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="next">
      <h1>Next content</h1>
      <div class="script"></div>
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
  console.log(window)
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
  tl.from('.sqsp-hero .block', { opacity: 0 })
    .addLabel('color')
    .to('.sqsp-hero .block', { opacity: 1 })
    .addLabel('spin')
    .to('.sqsp-hero .content', { scale: .6 })
    .addLabel('color2')
    .from('.box', { backgroundColor: '#990000' })
    .addLabel('vanish')
    .to('.box', { scale: 0.3, rotation: -45, autoAlpha: 0 })
    .addLabel('end')

  //need debounce!
  document.addEventListener('resize', () => tl.scrollTrigger.refresh())

  gsap.to('window', { duration: 2, scrollTo: () => { return window.innerHeight * .25 }, autoKill: true })
})

</script>

<style scss>
.wrapper {
  overflow: hidden;
}

.stage {
  /* padding-top: var(--header-height); */
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(--c-blue-default);
}

.sqsp-hero {
  position: absolute;
  overflow-x: hidden;
  inset: 0;

  --spacing: 4rem;



  .content {
    width: 130%;
    height: 100%;
    transform: translateX(-15%);
  }

  .text {
    padding: calc(var(--spacing) * 2);
  }

  .block {
    outline: 1px solid pink;
    position: relative;
    aspect-ratio: 3/2;

    &::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      aspect-ratio: 2/3;
      background-color: #ccc;
      width: 100%;
      border-radius: 1.5rem;
      overflow: hidden;
    }
  }

  .block-1 {}

  .block-2 {
    display: none;
  }

  .block-3 {
    &::before {
      left: auto;
      right: calc(var(--spacing) * 4);
      bottom: calc(var(--spacing) * 2);
    }
  }

  .block-4 {
    &::before {
      bottom: calc(var(--spacing) * -2);
      ;
    }
  }

  .block-5 {
    display: none;
  }

  .block-6 {
    &::before {
      left: 100%;
      bottom: auto;
      top: 0;
      aspect-ratio: 2/3;
      transform-origin: 0 0;
      rotate: 90deg;
    }
  }

  .block-7 {
    &::before {
      left: calc(var(--spacing) * 2);
      bottom: auto;
      top: calc(var(--spacing) * 4);
      aspect-ratio: 2/3;
    }
  }
}

.next {
  position: relative;
  min-height: 100vh;
  padding: 4rem;
}

.script {
  position: absolute;
  width: 100px;
  height: 2rem;
  left: 50%;
  top: 50%;
  background: var(--c-green-default);
  color: white;
}
</style>