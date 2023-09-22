<script setup lang="ts">
const { data } = await useFetch('/api/hello');
console.log(data.value);

const response = await $fetch('/api/hello');
console.log(response);
</script>

<template>
  <pre>{{ data }}</pre>
</template>
