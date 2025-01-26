<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-between items-center p-4">
      <nav class="flex space-x-4">
        <RouterLink to="/">Todos</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/template">Template</RouterLink>
        <RouterLink to="/reactivity">Reactivity</RouterLink>
        <RouterLink to="/computed">Computed</RouterLink>
        <RouterLink to="/binding">Binding</RouterLink>
      </nav>
  </header>
  <main class="mt-8 p-4">
    <RouterView />
  </main>
</template>

<style scoped>
.router-link-active {
  @apply text-green-500;
}
</style>