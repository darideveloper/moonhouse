// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import showTailwindcssBreakpoint from 'astro-show-tailwindcss-breakpoint'
import node from '@astrojs/node'


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap(),
    showTailwindcssBreakpoint()
  ],

  // Server side rendering
  output: 'server',
  adapter: node({ mode: 'standalone' }),
})