<template>
  <Menu />
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'home'
  }
})

definePageMeta({
  name: "Experimenten",
  title: "Experiments"
})

useSeoMeta({
  titel: "Experiments"
});
</script>

<style>
body.home {
  --page-bg: var(--c-blue-darkest);
}
</style>