<template>
  <ul>
    <li v-for="item in children">
      <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0 2rem;
}

a {
  position: relative;
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: .5rem 0;

  &:hover {
    opacity: 1;
  }

  &::before {
    content: "\219D";
    position: absolute;
    left: -2rem;
    top: 50%;
    font-weight: lighter;
    opacity: .5;

    transform: translate3d(0, -50%, 0);
    transition: 0.3s ease;
  }

  &:hover {
    &::before {
      scale: 1.2;
      rotate: 40deg;
      transform: translate3d(-.5rem, -50%, 0);
      opacity: 1;
    }
  }
}
</style>

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