<template>
  <div class="bg-dark text-white q-gutter-md tree-container">
    <q-tree
      dark
      :nodes="index"
      node-key="id"
      selected-color="purple-3"
      v-model:selected="naviStore().cbdc_article_selected_section"
      default-expand-all
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { naviStore } from 'src/stores/example-store'

const index = ref([
  {
    label: 'CBDC',
    id: 'front-page',

    children: [
      {
        label: 'Wstęp',
        id: 'intro',
      },
      {
        label: 'Waluta cyfrowa',
        id: 'digital-currency',
        children: [
          { label: 'Definicja', id: 'definition' },
          { label: 'Rodzaje walut cyfrowych', id: 'types' },
        ],
      },
      {
        label: 'Eksperyment',
        id: 'pros-and-cons',
        children: [
          { label: 'Opis badania', id: 'pros' },
          { label: 'Wyniki', id: 'cons' },
        ],
      },
      { label: 'Bibliografia', id: 'bibliography' },
    ],
  },
])
</script>

<style scoped>
.tree-container {
  padding: 100px 60px;
}
</style>
