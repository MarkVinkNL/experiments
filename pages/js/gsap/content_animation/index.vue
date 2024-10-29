<template>
  <div class="content-animation wrapper">
    <div class="container">
      <div class="row">
        <div class="col-22 offset-1">
          <div class="animation">
            <div class="timeline"></div>

            <div class="window window-1">

              <div class="inner">
                <div class="content">
                  <div class="anim-count">
                    <span>1/3</span>
                  </div>
                  <div class="title">
                    <h2>Content is king</h2>
                  </div>
                </div>
              </div>

              <div class="window window-3">
                <div class="inner">
                  <div class="content">
                    <div class="cross">
                      <div class="cntr"></div>
                      <div class="side"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="window window-2">
              <div class="inner">
                <div class="content">
                  <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem! Esse exercitationem
                      dolores suscipit dolor repellat ipsa sed quibusdam repudiandae fugit aspernatur!</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
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
      delay: 5,
      duration: 99,
      markers: true,
      trigger: '.animation',

      pin: true, // pin the trigger element while active
      start: 'top top', // when the top of the trigger hits the top of the viewport
      end: () => { return window.innerHeight * 3 }, // end after scrolling 4 * windowheight beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: 'labels', // snap to the closest label in the timeline
        duration: { min: 0.2, max: 10 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
      }
    }
  });

  // add animations and labels to the timeline
  tl.to('.timeline', { scaleX: .33, duration: 33 })
    .to('.window-1', { opacity: 1, duration: 3 }, "<")
    .to('.window-1', { scaleX: 1, duration: 5 }, ">")
    .to('.window-1 .inner', { scaleY: 1, duration: 5 }, ">")
    .to('.content .anim-count > *', { translateY: 0, rotate: 0, duration: 2 }, ">")
    .to('.content .title > *', { translateY: 0, rotate: 0, duration: 2 }, "<")
    .to('.window-2 .inner', { scaleY: 1, duration: 5 }, ">")
    .to('.window-2 .content .text > *', { translateY: 0, rotate: 0, opacity: 1, duration: 2 }, ">")
    .to('.window-3 .content .cross', { scale: 1, rotate: "-45deg", duration: 2 }, ">")
    .to('.window-1', { opacity: 1, duration: 16 }, ">")
    //.addLabel('first-shown')
    .to('.timeline', { scaleX: .66, duration: 33 })
    .to('.content .anim-count > *', { translateY: "-110%", duration: 3 }, "<")
    .to('.content .title > *', { translateY: "-110%", duration: 3 }, "<")
    .to('.window-2 .content .text > *', { translateY: 0, rotate: 0, opacity: 0, duration: 3 }, "<")
    .to('.window-3 .content .cross', { scale: 0, rotate: "-90deg", duration: 3 }, "<")
    .to('.window-1 > .inner', { scaleY: 0, duration: 3 }, ">")
    .to('.window-2 .inner', { scaleY: 0, duration: 3 }, "<")
    .to('.window-1', { scaleX: 0, transformOrigin: "100% 0", duration: 3 }, ">")
    .addLabel('transitioned-to-second')
    .to('.timeline', { scaleX: 1, duration: 33 }, 'transitioned-to-second')
    .addLabel('end')


  //need debounce!
  document.addEventListener('resize', () => tl.scrollTrigger.refresh())

  //gsap.to('window', { duration: 2, scrollTo: () => { return window.innerHeight * .25 }, autoKill: true })
})

</script>

<style lang="scss">
.content-animation {
  .animation {
    padding-top: calc(var(--header-height) + var(--sp-xl));
  }

  .timeline {
    position: relative;
    height: .5rem;
    transform: scaleX(0);
    transform-origin: 0 0;
    top: calc(var(--sp-xl) * -1);

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: lavender;
    }
  }

  .window {
    position: relative;
  }

  .inner {
    border: 2px solid white;
  }

  .window-1 {
    transform: scaleX(0);
    transform-origin: 0 100%;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 2px;
      background: white;
    }

    .inner {
      overflow: hidden;
      transform-origin: 0 100%;
      transform: scaleY(0);
    }

    .content {
      padding: 1rem;

      .anim-count,
      .title {
        overflow: clip;

        &>* {
          display: inline-block;
          transform: translateY(120%) rotate(5deg);
        }
      }
    }
  }

  .window-2 {
    position: relative;
    width: 30%;
    top: -2px;

    .inner {
      transform: scaleY(0);
      transform-origin: 0 0;
    }

    .content {
      padding: 1rem;

      .text {
        overflow: clip;

        &>* {
          display: inline-block;
          transform: translateY(120%) rotate(5deg);
          opacity: 0;
        }
      }
    }
  }

  .window-3 {
    position: absolute;
    width: calc(70% + 2px);
    top: calc(100% - 2px);
    right: 0;
    aspect-ratio: 16/10;

    .inner {
      position: absolute;
      inset: 0;
      transform: scaleY(0);
      transform-origin: 0 0;
    }

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      .cross {
        scale: 0;
      }
    }

  }
}

.cross {
  position: relative;
  aspect-ratio: 1;
  max-width: 30%;
  width: 100%;
  rotate: -45deg;

  .cntr {
    position: absolute;
    left: calc(50% - 1px);
    top: 0;
    bottom: 0;
    width: 2px;
    background: white;
    rotate: -90deg;
  }

  .side {
    position: absolute;
    left: calc(50% - 1px);
    top: 0;
    bottom: 0;
    width: 2px;
    transform-origin: 50% 50%;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 60%;
      background: white;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 60%;
      right: 0;
      bottom: 0;
      background: white;
    }
  }
}
</style>