<template>
  <div class="option-container">
    <h4>{{ option.title }}</h4>
    <div class="option-buttons">
      <button
        v-for="value in option.buttons"
        :key="value"
        :class="options[option.category] === value && 'option-active'"
        @click="options[option.category] = value">
        {{ value }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Gender, Popularity, Length } from '@/data';

interface OptionProps {
  option: {
    title: string;
    category: string;
    buttons: Gender[] | Popularity[] | Length[];
  };
  options: {
    gender: Gender;
    popularity: Popularity;
    length: Length;
  };
}

const props = defineProps<OptionProps>();
</script>

<style lang="scss" scoped>
.option-buttons button {
  background-color: white;
  outline: 0.15rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(27, 60, 138);
  cursor: pointer;
  font-weight: 200;

  &:first-child {
    border-radius: 1rem 0 0 1rem;
  }

  &:last-child {
    border-radius: 0 1rem 1rem 0;
  }

  &.option-active {
    background-color: rgb(249, 87, 89);
    color: white;
  }
}
</style>
