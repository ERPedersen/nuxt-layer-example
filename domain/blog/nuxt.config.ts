import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt/config'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    join(currentDir, './nuxt.module.ts'),
  ],
})
