<template>
  <div class="card">
    <h4>{{ name }}</h4>
    <p @click="removeName">X</p>
  </div>
</template>

<script setup lang="ts">
interface NameProps {
  name: string;
  index: number;
}

const props = defineProps<NameProps>();

const emit = defineEmits(['remove']);

const removeName = () => {
  emit('remove', props.index);
};
</script>

<style lang="scss" scoped>
.card {
  background-color: rgb(27, 60, 138);
  width: 28%;
  color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;

  p {
    position: absolute;
    top: -10%;
    left: 93%;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.178);
  }
}
</style>
