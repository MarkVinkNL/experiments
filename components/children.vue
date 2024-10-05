<template>
  <ul>
    <li v-for="item in children">
      <a :href="item.path">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script setup>
  const router = useRouter();
  const route = useRoute();

  let children = [];


  router.getRoutes().forEach((routes) => {
    if (!routes.path.startsWith(route.path) || route.path == routes.path) return;

    children.push({
      name: routes.name,
      path: routes.path,
    })
  })

  children.sort((a, b) => a.name.localeCompare(b.name))
</script>