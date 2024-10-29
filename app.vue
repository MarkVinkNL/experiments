<template>
  <div>
    <div class="page-wrapper">
      <Grid />
      <div>
        <NuxtPage class="page" />
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script setup>
useHead({
  title: "Mark Vink | WEB Experiments",
  meta: {
    description: "Mark Vink is a webdeveloper since 2005, these are some of his webdevelopment tests and other curious junk."
  },
  bodyAttrs: {
    class: 'css',
  }
})
</script>