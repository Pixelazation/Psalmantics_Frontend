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
  <input type="text" v-model="query">
  <button @click="searchQuery">
    Search
  </button>
  <Verse v-for="verse in verseList" :key="verse.id" :verse="verse" />
</template>
