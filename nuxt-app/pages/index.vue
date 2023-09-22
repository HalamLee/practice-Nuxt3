<script setup lang="ts">
// useFetch + toRaw
// const { data } = await useFetch('/api/hello');
// console.log('useFetch + toRaw', toRaw(data.value));

// useFetch + transform
// const { data: example } = await useFetch('/api/hello', {
//   transform: (_example) => _example.hello,
// });

// $fetch
// const response = await $fetch('/api/hello');
// console.log(response);

// useLazyFetch
// const { data: example2, pending } = await useLazyFetch('/api/hello', {
//   transform: (_example2) => _example2.hello,
// });

// useAsyncData
const { data: productCount, pending } = await useAsyncData('count', () =>
  $fetch('/api/hello')
);

const refresh = () => refreshNuxtData('count');
</script>

<template>
  <!-- <p>{{ example }}</p> -->
  <!-- <p>{{ pending ? 'Loading' : example2 }}</p> -->
  <p>{{ pending ? 'Loading' : productCount }}</p>
  <button @click="refresh">Refresh</button>
</template>
