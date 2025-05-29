<script setup lang="ts">
import Banner from '../components/Banner.vue'
import Verse from '../components/Verse.vue'

import { ref } from 'vue'

const query = ref('')

const mockValues = [
  {
    id: 43017016,
    book: "John",
    testament: "NT",
    chapter: 17,
    verse: 16,
    text: "They are not of the world, even as I am not of the world.",
    similarity: 0.777927615088962
  },
  {
    id: 43001010,
    book: "John",
    testament: "NT",
    chapter: 1,
    verse: 10,
    text: "He was in the world, and the world was made by him, and the world knew him not.",
    similarity: 0.7326933488701
  },
  {
    id: 43015019,
    book: "John",
    testament: "NT",
    chapter: 15,
    verse: 19,
    text: "If ye were of the world, the world would love his own: but because ye are not of the world, but I have chosen you out of the world, therefore the world hateth you.",
    similarity: 0.705137395554712
  },
  {
    id: 62004005,
    book: "1 John",
    testament: "NT",
    chapter: 4,
    verse: 5,
    text: "They are of the world: therefore speak they of the world, and the world heareth them.",
    similarity: 0.690500513998452
  },
  {
    id: 43017014,
    book: "John",
    testament: "NT",
    chapter: 17,
    verse: 14,
    text: "I have given them thy word; and the world hath hated them, because they are not of the world, even as I am not of the world.",
    similarity: 0.652180528176284
  }
]

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
  <Verse v-for="verse in mockValues" :verse="verse" />
</template>
