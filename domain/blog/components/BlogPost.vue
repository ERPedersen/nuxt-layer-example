<script setup lang="ts">
import type { Post } from '../composables/useBlogPosts'

defineProps<{
  post: Post
}>()
</script>

<template>
  <article>
    <header>
      <h1>{{ post.title }}</h1>
    </header>
    <section v-html="post.content" />
    <footer>
      <p>
        <NuxtLink to="/blog">Back</NuxtLink>
      </p>
    </footer>
  </article>
</template>
