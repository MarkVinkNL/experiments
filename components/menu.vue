<template>

  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="col-24">
          <h1 class="title">{{ route.meta.title ?? route.name }}</h1>
          <Children />
        </div>
      </div>
    </div>
  </div>

</template>

<style>
.menu {
  position: absolute;
  inset: 0;
  padding-top: var(--header-height);

  .title {
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
}
</style>

<script setup>
const route = useRoute();
</script>