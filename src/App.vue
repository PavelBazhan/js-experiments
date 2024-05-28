<script setup>

</script>

<template>
  <h1>JS Experiments</h1>
  <nav>
    <div>
      <RouterLink :to="{ name: 'HomeView' }">HomeView</RouterLink>
    </div>
    <div>
      <RouterLink :to="{ name: 'ClosuresView' }">ClosuresView</RouterLink>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
