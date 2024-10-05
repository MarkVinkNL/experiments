<template>

<header>
  <nav class="container">
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li v-for="item in pages">
        <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</header>

</template>

<script setup>
  const router = useRouter();
  const route = useRoute();

  let pages = [];


  router.getRoutes().forEach((routes) => {
    if ((routes.path.match(/\//g) || []).length >= 2 || routes.path == '/') return;

    pages.push({
      name: routes.name,
      path: routes.path,
      active: routes.path.startsWith(route.path)
    })
  })

</script>

<style scss>
  header {
    display: flex;
    justify-content: center;

    nav {
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;

        a {
          text-decoration: none;
        }
      }
    }
  }
</style>