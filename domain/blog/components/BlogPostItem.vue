<script setup lang="ts">
import type { Post } from '../composables/useBlogPosts'

defineProps<{
  post: Post
}>()
</script>

<template>
  <article>
    <header>
      <h3>
        <NuxtLink :to="`/blog/${post.id}`">
          {{ post.title }}
        </NuxtLink>
      </h3>
    </header>
  </article>
</template>
