<template>

  <header>
    <div class="container">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li v-for="item in pages">
            <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="back" v-if="parent != ''">
        <NuxtLink :to="parent">Terug</NuxtLink>
      </div>
    </div>
  </header>

</template>

<script setup>
const router = useRouter();
const route = useRoute();

const parent = useState("parent");

let pages = [];

router.getRoutes().forEach((routes) => {
  if ((routes.path.match(/\//g) || []).length >= 2 || routes.path == '/') return;
  console.log(routes);
  pages.push({
    name: routes.name,
    path: routes.path,
    active: routes.path.startsWith(route.path)
  })
})
</script>

<style scss>
:root {
  --header-height: 8rem;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding: 1rem;


  nav {
    background: black;
    border-radius: 1.5rem;

    ul {
      list-style: none;
      margin: 0;
      display: flex;
      align-items: center;

      a {
        display: inline-block;
        text-decoration: none;
        padding: .75rem 1rem;
        color: white;
        font-weight: 500;
        text-transform: uppercase;

        &:hover {
          color: var(--c-yellow-default);
        }
      }
    }
  }
}
</style>