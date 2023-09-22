<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    {
      name: 'description',
      content: 'This is a repository for practicing Nuxt3',
    },
  ],
});
</script>
