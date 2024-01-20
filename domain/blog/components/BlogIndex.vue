<script setup lang="ts">
const { blogPosts } = useBlogPosts()
</script>

<template>
  <BlogPostItem
    v-for="blogPost in blogPosts"
    :key="blogPost.id"
    :post="blogPost"
  />
</template>
