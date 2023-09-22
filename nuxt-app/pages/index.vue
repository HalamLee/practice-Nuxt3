<script setup>
definePageMeta({
  middleware: 'auth',
});

const { $sayHello } = useNuxtApp();
$sayHello('hiiiiiiii');
</script>

<template>
  <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Hello Nuxt3</h1>
  </div>
  <div>
    <ContentDoc />
  </div>
</template>
