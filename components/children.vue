<template>
  <ul>
    <li v-for="item in children">
      <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

let children = [];

router.getRoutes().forEach((routes) => {
  if (!routes.path.startsWith(route.path) || route.path == routes.path) return;

  let thisRoute = routes.path;
  if (route.path != '/') {
    thisRoute = routes.path.substring(route.path.length)
  }

  if ((thisRoute.match(/\//g) || []).length >= 2) return

  children.push({
    route: thisRoute,
    name: routes.name,
    path: routes.path,
  })
})

children.sort((a, b) => a.name.localeCompare(b.name))
</script>