<template>
  <Menu />
</template>

<script setup>
useHead({
  title: "Mark Vink | CSS Experiments",
  meta: {
    description: "Mark Vink is a webdeveloper since 2005, these are some of his webdevelopment tests and other curious junk."
  },
  bodyAttrs: {
    class: 'css',
  }
})

definePageMeta({
  name: "CSS",
  intro: "",
  menu_title: "CSS experiments"
})
</script>

<style>
body.css {
  --page-bg: var(--c-blue-darkest);
}
</style>