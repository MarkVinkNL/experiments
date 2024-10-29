<template>
  <Menu />
</template>

<script setup>
useHead({
  title: "Mark Vink | Experiments",
  meta: {
    description: "Mark Vink is a webdeveloper since 2005, these are some of his webdevelopment tests and other curious junk."
  },
  bodyAttrs: {
    class: 'home',
  }
})

definePageMeta({
  name: "Experimenten",
  intro: "These are experiments I made for projects, the oldest dating back to about 2014. I never documented, archived or valued them. That changed when my bigest experiment folder got wiped a few months ago. This is mostly for me to archive and play a little with nuxt.<br /><br />Dont expect everything to function!",
  menu_title: "Experiments"
})
</script>

<script>
// const blaat = useState('blaat', () => 'schaap');
// const blaat = useState('blaat') //schaap
// blaat.value = 'Testing';
// const blaat = useState('blaat') //Testing
</script>

<style>
body.home {
  --page-bg: var(--c-green-default);
}
</style>