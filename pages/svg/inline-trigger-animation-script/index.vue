<template>
  <div class="container">
    <div class="uitleg">
      <h1>Script embeded in svg</h1>
      <p>Triggering animation on mouseover</p>
    </div>

    <div class="object_container">
      <object type="image/svg+xml" data="/svg/inline-trigger-animation-script/svg.svg"></object>
    </div>
  </div>
</template>

<style>
.object_container {
  display: flex;
  justify-content: center;
}

object {
  max-width: 50vh;
}
</style>
