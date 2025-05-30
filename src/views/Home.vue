<script setup lang="ts">
import Banner from '../components/Banner.vue'
import Verse from '../components/Verse.vue'

import { ref } from 'vue'
import type { VerseType } from '../types/verse'
import { searchVerses } from '../services/search'

const query = ref('')

const verseList = ref<VerseType[]>([])

async function searchQuery() {
  console.log(query.value);
  verseList.value = await searchVerses(query.value);
}

</script>

<template>
  <Banner />
  <div id="search">
    <div>
      <input type="text" v-model="query">
      <button @click="searchQuery">
        Search
      </button>
    </div>
  </div>
  
  <div class="verses">
    <Verse v-for="verse in verseList" :key="verse.id" :verse="verse" />
  </div>
</template>

<style lang="css" scoped>
  #search {
    margin: 16px;
  }

  #search div {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    gap: 16px;
    align-content: center;
  }

  input[type="text"] {
    padding: 8px 12px;
    border: 1px solid #b8ae9c;
    border-radius: 4px;
    background-color: #fffdf7;
    color: #3a2e1e;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 16px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
  }

  button {
    padding: 8px 16px;
    background-color: #d6cfc1;
    color: #3a2e1e;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 16px;
    border: 1px solid #b8ae9c;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #c8bca6;
  }

  .verses {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    gap: 16px;
    justify-content: center;
    padding: 16px;
  }
</style>
