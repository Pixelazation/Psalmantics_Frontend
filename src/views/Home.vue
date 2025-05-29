<script setup lang="ts">
import Banner from '../components/Banner.vue'

import { ref } from 'vue'

const query = ref('')

function searchQuery() {
  console.log(query.value)
}

</script>

<template>
  <Banner />
  <input type="text" v-model="query">
  <button @click="searchQuery">
    Search
  </button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
