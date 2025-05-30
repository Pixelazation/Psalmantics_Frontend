<script setup lang="ts">
  import type { VerseType } from '../types/verse';

  const props = defineProps<{
    verse: VerseType
  }>()

  const { book, chapter, verse, text, similarity } = props.verse

</script>

<template>
  <div>
    <h2>{{ book }} {{ chapter }}:{{ verse }}</h2>
    <p>{{ text }}</p>
    <span>Similarity: {{ similarity.toFixed(5) }}</span>
  </div>
</template>

<style lang="css" scoped>
  div {
    max-width: 256px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: white;
    /* background-color: #7E0021; */
    gap: 4px;
  }

  h2 {
    background-color: #314004;
    padding: 8px;
    font-size: large;
    font-weight: bold;
    box-shadow: 5px 10px 24px black;
  }

  p {
    padding: 8px;
    display: flex;
    flex-grow: 1;
    background-color: #7E0021;
    box-shadow: 5px 10px 24px black;
  }

  span {
    padding: 8px;
    display: flex;
    background-color: #CC9900;
    box-shadow: 5px 10px 24px black;
  }
</style>