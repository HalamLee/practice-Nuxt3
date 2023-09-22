<script setup lang="ts">
const { data } = await useFetch('/api/hello');
console.log('useFetch + toRaw', toRaw(data.value));

const { data: example } = await useFetch('/api/hello', {
  transform: (_example) => _example.hello,
});

const response = await $fetch('/api/hello');
console.log(response);

const { data: example2, pending } = await useLazyFetch('/api/hello', {
  transform: (_example2) => _example2.hello,
});
</script>

<template>
  <p>{{ example }}</p>
  <p>{{ pending ? 'Loading' : example2 }}</p>
</template>
