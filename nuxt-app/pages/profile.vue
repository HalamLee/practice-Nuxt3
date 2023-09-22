<script setup lang="ts">
useHead({
  title: 'My App - Profile',
  meta: [
    {
      name: 'description',
      content: 'This is a repository for practicing Nuxt3 - Profile page',
    },
  ],
});

import { useUtils } from '~/composables/useUtils';

const { sayHello } = useUtils();
sayHello();
</script>

<template>
  <div class="container py-3 mx-auto Main">
    <h1 class="text-teal-500">Profile</h1>
  </div>
</template>
