<script setup>
const nuxt = useNuxtApp();
const route = useRoute();

console.log(nuxt);

console.log(route.params.id);
</script>

<template>
  <div>event id: {{ $route.params.id }}</div>
</template>
