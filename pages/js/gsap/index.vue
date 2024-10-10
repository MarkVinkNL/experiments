<template>

  <div>
    <h1>{{ route.name }}</h1>
    <Children />
  </div>

</template>

<script setup>
const route = useRoute();
</script>