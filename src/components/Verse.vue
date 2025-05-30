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
  </div>
</template>

<style lang="css" scoped>
  div {
    max-width: 256px;
    margin: 0 auto;
    box-shadow: 5px 10px 10px black;
    color: white;
    background-color: #7E0021;
  }

  h2 {
    background-color: #314004;
    padding: 8px;
    font-size: large;
    font-weight: bold;
  }

  p {
    padding: 8px;
  }
</style>