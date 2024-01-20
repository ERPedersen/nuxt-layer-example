<script setup lang="ts">
import type { Post } from '../../composables/useBlogPosts'

const { params } = useRoute()
const { getBlogPost } = useBlogPosts()

const post = ref<Post>(getBlogPost(parseInt(params.id as string)))
</script>

<template>
  <BlogPost :post="post"></BlogPost>
</template>
