<script setup lang="ts">
  import type { VerseType } from '../types/verse';

  const props = defineProps<{
    verse: VerseType
  }>()

  const { book, chapter, verse, text, similarity } = props.verse

</script>

<template>
  <div class="border-1">
    <h2>{{ book }} {{ chapter }}:{{ verse }}</h2>
    <p>{{ text }}</p>
  </div>
</template>