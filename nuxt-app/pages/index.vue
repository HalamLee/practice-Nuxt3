<script setup lang="ts">
import { useCounter } from '~/composables/states';

const counter = useCounter();
</script>

<template>
  <div>
    <div id="main">
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter id="counter" />
  </div>
</template>
