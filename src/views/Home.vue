<script setup lang="ts">
import Banner from '../components/Banner.vue'
import Verse from '../components/Verse.vue'

import { ref } from 'vue'
import type { VerseType } from '../types/verse'
import { searchVerses } from '../services/search'
import Loader from '../components/Loader.vue'

const query = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
const loadingStatus = ref<number>(0)

const testament = ref<string>("")
const book = ref<string|null>(null)
const chapter = ref<number | null>(null)
const items = ref<number>(8)

const verseList = ref<VerseType[]>([])

async function searchQuery() {
  console.log(query.value);
  const filters = {
    testament: testament.value,
    book: book.value,
    chapter: chapter.value,
    items: items.value
  }

  searchInput.value?.blur();
  loadingStatus.value = 1;
  verseList.value = await searchVerses(query.value, filters);
  loadingStatus.value = 2;
}

</script>

<template>
  <Banner />
  <div id="search">
    <div>
      <input id="search-box" ref="searchInput" type="text" v-model="query" placeholder="Search..." @keyup.enter="searchQuery">
      <button @click="searchQuery">
        Search
      </button>
    </div>
    <div>
      <label>Filters: </label>

      <select v-model="testament">
        <option value="">All Testaments</option>
        <option value="OT">Old Testament</option>
        <option value="NT">New Testament</option>
      </select>

      <!-- <input type="text" v-model="book" placeholder="Book (optional)" />

      <label>Chapter: </label>
      <input type="number" v-model.number="chapter" placeholder="(optional)" min="1" /> -->

      <label>Items: </label>
      <input id="item-count" type="number" v-model.number="items" placeholder="Items" min="1" />
    </div>
  </div>
  
  <p class="placeholder" v-if="loadingStatus == 0">Start searching!</p>
  <Loader class="placeholder" style="margin-top: 32px;" v-else-if="loadingStatus == 1" />

  <div v-else-if="loadingStatus == 2">
    <div v-if="verseList.length > 0" class="verses">
      <Verse v-for="verse in verseList" :key="verse.id" :verse="verse" />
    </div>
    <p class="placeholder" v-else>No results found</p>
  </div>
  
</template>

<style lang="css" scoped>
  #search {
    width: fit-content;
    padding: 16px;
    margin: 16px auto;
    display: flex;
    gap: 16px;
    flex-direction: column;
    background-color: #7E0021;
    border-radius: 16px;
  }

  #search div {
    width: 100%;              
    max-width: 800px; 
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    gap: 16px;
    align-items: center;
  }

  #search span {
    height: fit-content;
  }

  input[type="text"] {
    flex: 1;             
    min-width: 0;             
    padding: 8px 12px;
    border: 1px solid #b8ae9c;
    border-radius: 4px;
    background-color: #fffdf7;
    color: #3a2e1e;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 16px;
    box-sizing: border-box;
  }

  select,
  input[type="number"] {
    padding: 8px 12px;
    flex: 1;
    border: 1px solid #b8ae9c;
    border-radius: 4px;
    background-color: #fffdf7;
    color: #3a2e1e;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 16px;
    box-sizing: border-box;
  }

  label {
    color: white;
  }

  #item-count {
    width: 64px;
  }

  select {
    appearance: none;
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
    width: 75%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    gap: 16px;
    justify-content: center;
    padding: 16px;
  }

  .placeholder {
    margin: 0 auto;
    text-align: center;
  }
</style>
