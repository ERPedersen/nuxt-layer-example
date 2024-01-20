<script setup lang="ts">
import type { Post } from '../../composables/useBlogPosts'

const { params } = useRoute()
const { getBlogPost } = useBlogPosts()

const blogPost = ref<Post>(getBlogPost(parseInt(params.id as string)))
</script>

<template>
  <article>
    <header>
      <h1>{{ blogPost.title }}</h1>
    </header>
    <section v-html="blogPost.content" />
    <footer>
      <p>
        <NuxtLink to="/blog">Back</NuxtLink>
      </p>
    </footer>
  </article>
</template>
