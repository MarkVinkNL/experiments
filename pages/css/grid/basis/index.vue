<template>
  <div class="container grid-basis-experiment">
    <div class="row">
      <div class="col-22 offset-1">
        <h2>Basic CSS grid test</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-22 offset-1">
        <div class="grid">
          <div class="item item-1"><span>1</span></div>
          <div class="item item-2"><span>2</span></div>
          <div class="item"><span>3</span></div>
          <div class="item"><span>4</span></div>
          <div class="item item-5"><span>5</span></div>
          <div class="item item-6"><span>6</span></div>
          <div class="item"><span>7</span></div>
          <div class="item"><span>8</span></div>
          <div class="item item-9"><span>9</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'css'
  }
})
</script>

<style lang="scss">
body.css {
  --page-bg: var(--c-blue-darkest);
}

.grid-basis-experiment {
  margin-top: var(--header-height);


  .grid {
    display: grid;
    height: 70vh;
    gap: 1rem;
    grid-template-columns: 1fr;

    @include media-breakpoint-up(md) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    .item {
      position: relative;
      background: var(--c-yellow-lighter);
      border-radius: .5rem;

      span {
        position: absolute;
        left: 1rem;
        top: 1rem;
        width: 2rem;
        aspect-ratio: 1;
        border-radius: 1rem;
        background: white;
        color: black;
        text-align: center
      }
    }

    .item-1 {
      @include media-breakpoint-up(md) {
        grid-column: 3;
        grid-row: 4;
      }
    }

    .item-2 {
      background: var(--c-yellow-darker);

      @include media-breakpoint-up(md) {
        grid-column: 1 / span 2;
      }
    }

    .item-5 {
      background: var(--c-red-lighter);

      @include media-breakpoint-up(md) {
        grid-column: 1 / span 2;
        grid-row: 4;
      }
    }

    .item-6 {
      background: var(--c-green-lighter);

      @include media-breakpoint-up(md) {
        grid-column: 3;
        grid-row: span 2;
      }
    }

    .item-9 {
      @include media-breakpoint-up(md) {
        grid-column: 2;
        grid-row: 2;
      }
    }
  }
}
</style>