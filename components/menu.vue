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
  padding-top: var(--header-height);

  .title {
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  ul {
    list-style: none;

    li {
      a {
        font-size: 1.25rem;
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>

<script setup>
const route = useRoute();
</script>