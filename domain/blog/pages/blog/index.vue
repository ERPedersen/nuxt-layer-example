<template>
  <header>
    <h1>Blog</h1>
  </header>
  <main>
    <section>
      <h2>Posts</h2>
      <BlogIndex />
    </section>
  </main>
  <footer>
    <NuxtLink to="/">
      Back
    </NuxtLink>
  </footer>
</template>

<script setup>
definePageMeta({
  layout: 'blog',
})
</script>

<style lang="scss" scoped>
</style>
