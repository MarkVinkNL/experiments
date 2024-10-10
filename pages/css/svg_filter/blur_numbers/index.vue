<template>
  <div class="number_counter">

    <div class="number" id="number" v-on:click="restart()">
      <div class="left" id="left"></div>
      <div class="separator" id="separator">.</div>
      <div class="right" id="right">0</div>
    </div>
    <p>Click on the number to reset</p>


    <svg class="svgFilter" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="blurFilter">
          <feGaussianBlur id="blurFilterItem" in="SourceGraphic" stdDeviation="10,0"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.number_counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.number {
  display: flex;
  align-items: center;
  font-size: 6rem;
  justify-content: flex-end;

  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  cursor: pointer;

  .blur {
    filter: url("#blurFilter");
  }

  .separator {
    opacity: 0;
  }

  .separator.show {
    opacity: 1;
  }

  .left,
  .right {
    min-width: 11rem;
    text-align: right;
  }
}

.number .number .number .separator {
  opacity: 0;
  transition: opacity 0.1s ease;
}

.svgFilter {
  display: none;
}


.number_counter {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--c-green-default);
  font-style: italic;
  padding: 1;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
<script setup>

let target = 200000;
let current = 0;
const step = 310;

onMounted(() => {
  window["$"] = (selector) => document.querySelector(selector);

  const number = $("#number");
  const left = $("#left");
  const rights = $("#right");

  requestAnimationFrame(start);
})

const start = () => {
  right.classList.add("blur");
  update();
};

const restart = () => {
  current = 0;
  start();
};

const update = () => {
  if (target - current > 0) current += step;

  if (current >= 1000) {
    separator.classList.add("show");
  } else {
    separator.classList.remove("show");
  }

  updateValues();

  if (Math.abs(target - current) > step) {
    return requestAnimationFrame(update);
  }

  current = target;
  updateValues();
  left.classList.remove("blur");
  right.classList.remove("blur");
};

const updateValues = () => {
  const [first, ...rest] = current.toLocaleString("nl-NL").split(".").reverse();
  let thousends = rest.reverse();

  const thousendsString = thousends.join("");

  if (+left.innerText != thousendsString) {
    left.classList.add("blur");
  } else {
    left.classList.remove("blur");
  }

  left.innerText = thousendsString;
  right.innerText = first;
};
</script>
