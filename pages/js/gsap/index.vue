<template>
  <Menu />
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'js'
  }
})

definePageMeta({
  name: "GSAP",
  title: "GSAP experiments"
})
</script>

<style>
body.js {
  --page-bg: var(--c-yellow-darker);
}
</style>