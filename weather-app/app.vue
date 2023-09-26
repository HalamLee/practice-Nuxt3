<template>
  <div class="h-screen relative overflow-hidden">
    <img />
    <div class="absolute w-full h-full top-0 overlay" />
    <div class="absolute w-full h-full top-0 p-48">
      <div class="flex justify-between">
        <div>
          <h1 class="text-7xl text-white">{{ city.name }}</h1>
          <p class="font-extralight text-2xl mt-2 text-white">Sunday Dec 9th</p>
          <img
            :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`"
            class="w-56 icon" />
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">
            {{ city.main.temp }}°
          </p>
        </div>
      </div>
      <div class="mt-20">
        <input
          type="text"
          class="w-1/2 h-10 p-3"
          placeholder="Search a city..."
          v-model="input" />
        <button class="bg-sky-400 w-20 text-white h-10" @click="clickHandler">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const search = ref('Seoul');
const input = ref('');
const background = ref('');

const { data: city, error } = await useAsyncData(
  'city',
  async () => {
    const response = $fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=3920187c07ee1d1397613db28a2ecc29`
    );

    return response;
  },
  {
    watch: [search],
  }
);

const clickHandler = () => {
  const formattedSearch = input.value.trim().split(' ').join('+');
  search.value = formattedSearch;
  input.value = '';
};
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

.icon {
  margin-left: -2.75rem;
}
</style>
