<template>
  <div class="container">
    <article-navigation class="navigation" />
    <ArticleContainer ref="articleContainer" class="article" />
  </div>
</template>

<script setup lang="ts">
import ArticleContainer from 'src/components/ArticleContainer.vue'
import ArticleNavigation from 'src/components/ArticleNavigation.vue'
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.navigation {
  width: 400px;
  min-width: 200px;
  /* overflow: auto; */
}

.article {
  flex: 1;
  height: 100vh;
  overflow: auto;
}
</style>
