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
  name: "JS",
  title: "Javascript experiments"
})

useSeoMeta({
  titel: "Javascript experiments"
});
</script>

<style>
body.js {
  --page-bg: var(--c-yellow-darker);
}
</style>