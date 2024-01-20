import { defineNuxtModule } from '@nuxt/kit'
import type { ModuleOptions, Nuxt } from '@nuxt/schema'

interface BlogOptions extends ModuleOptions {
}

export default defineNuxtModule<BlogOptions>({
  meta: {
    name: 'blog',
    configKey: 'blog',
    compatibility: {
      nuxt: '^3.9.3',
    },
  },
  setup(options: BlogOptions, nuxt: Nuxt) {
    //
  },
})
