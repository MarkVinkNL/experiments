<template>
  <div class="css_pizza_slices">
    <div class="container">
      <div class="row">
        <div class="col-22 offset-1">
          <div class="explanation">
            <h2>CSS Clip-path food slices concept</h2>
            <p><small>Made: 08/2020</small></p>
            <p>
              Made as an visual interesting object to demonstrate the percentages of meals in a certain (large) food
              order. Rejected this css clip-path concept and made an alternative with js, rotation and overflow clipping
              because not all target browsers had full support
            </p>
            <p>The project had great top down shots of the food, these are just some lovely grabs from unsplash</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-22 offset-1 col-md-12 offset-md-6">
          <div class="pizza">
            <div class="filling filling-1"></div>
            <div class="filling filling-2"></div>
            <div class="filling filling-3"></div>
          </div>
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

.css_pizza_slices {
  margin-top: var(--header-height);

  .pizza {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #ccc;
    overflow: clip;
  }

  .filling {
    position: absolute;
    inset: 0;
    background-size: cover;
  }

  .filling-1 {
    background-color: var(--c-red-default);
    background-image: url(/images/css/slices/css_pizza_slices-3.jpg);
    clip-path: polygon(50% 0, 50% 50%, 50% 0, 0 0, 0 100%, 100% 100%, 100% 0);
  }

  .filling-2 {
    background-color: var(--c-green-lighter);
    background-image: url(/images/css/slices/css_pizza_slices-2.jpg);
    clip-path: polygon(50% 0, 50% 50%, 0% 87%, 0% 100%, 100% 100%, 100% 0);
  }

  .filling-3 {
    background-color: var(--c-yellow-default);
    background-image: url(/images/css/slices/css_pizza_slices-1.jpg);
    clip-path: polygon(50% 0, 50% 50%, 80% 100%, 100% 100%, 100% 0);
  }
}
</style>