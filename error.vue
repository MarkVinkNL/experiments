<template>
  <div>
    <div class="page-wrapper">
      <Grid />
      <div class="error">
        <h5>Whoops!</h5>
        <h2>This is a {{ error.statusCode }} error</h2>
        <p>Go back to <a href="/">HOME</a> and maybe try again? This link is incorrect of this page has been removed.
        </p>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss">
.error {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    max-width: 20rem;
    text-align: center;
  }
}
</style>