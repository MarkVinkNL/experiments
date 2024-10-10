<template>
  <div class="gradient_container"></div>
</template>
<style scss>
.gradient_container {
  position: absolute;
  inset: 0;
  --color: 50%;
  --angle: 45deg;
  --chroma: 0.2;

  /* multi-position color-stops */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient */
  background: linear-gradient(var(--angle),
      oklch(var(--color) var(--chroma) 10) 9%,
      oklch(100% 0 0) 9% 11%,
      oklch(var(--color) var(--chroma) 20) 11% 19%,
      oklch(100% 0 0) 19% 21%,
      oklch(var(--color) var(--chroma) 30) 21% 29%,
      oklch(100% 0 0) 29% 31%,
      oklch(var(--color) var(--chroma) 40) 31% 39%,
      oklch(100% 0 0) 39% 41%,
      oklch(var(--color) var(--chroma) 50) 41% 49%,
      oklch(100% 0 0) 49% 51%,
      oklch(var(--color) var(--chroma) 60) 51% 59%,
      oklch(100% 0 0) 59% 61%,
      oklch(var(--color) var(--chroma) 70) 61% 69%,
      oklch(100% 0 0) 69% 71%,
      oklch(var(--color) var(--chroma) 80) 71% 79%,
      oklch(100% 0 0) 79% 81%,
      oklch(var(--color) var(--chroma) 90) 81% 89%,
      oklch(100% 0 0) 89% 91%,
      oklch(var(--color) var(--chroma) 99) 91%);
}
</style>
<script setup>
let raf = ref(0);

onUnmounted(() => {
  cancelAnimationFrame(raf);
})

onMounted(() => {
  let t = 0,
    a = 45,
    anglemin = 30,
    anglemax = 60,
    colormin = 50,
    colormax = 90;

  function oscillateInt(input, min, max) {
    let range = max - min;
    return min + Math.abs(((input + range) % (range * 2)) - range);
  }

  function oscillateIntEased(input, min, max) {
    let range = max - min;
    let delta = Math.abs(max) - Math.abs(min);
    let current = min + Math.abs(((input + range) % (range * 2)) - range);

    return easeInOutQuad(current, min, delta, max);
  }

  //https://github.com/rdy/easing-js/blob/master/src/easing.js
  function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t + b;
    } else {
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    }
  }

  function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t * t + b;
    } else {
      return (c / 2) * ((t -= 2) * t * t + 2) + b;
    }
  }

  function easeInOutBounce(t, b, c, d) {
    var v;
    if (t < d / 2) {
      v = easeInBounce(t * 2, 0, c, d);
      return v * 0.5 + b;
    } else {
      v = easeOutBounce(t * 2 - d, 0, c, d);
      return v * 0.5 + c * 0.5 + b;
    }
  }

  function easeInBounce(t, b, c, d) {
    var v;
    v = Easing.easeOutBounce(d - t, 0, c, d);
    return c - v + b;
  }
  function easeOutBounce(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  }

  function easeInOutExpo(t, b, c, d) {
    if (t === 0) {
      b;
    }
    if (t === d) {
      b + c;
    }
    if ((t /= d / 2) < 1) {
      return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    } else {
      return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  }

  function animate() {
    let color = oscillateInt(t, colormin, colormax);
    let angle = oscillateIntEased(t, anglemin, anglemax);

    document.querySelector('.gradient_container').style.cssText = "--color: " + color + "%; --angle: " + angle + "deg";

    t += 0.2;

    raf = requestAnimationFrame(animate);
  }

  raf = requestAnimationFrame(animate);
});
</script>
