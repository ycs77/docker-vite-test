import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import TailwindCss from '@tailwindcss/vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    Vue(),
    TailwindCss(),
    Pages(),
  ],
  server: {
    host: true,
    // hmr: {
    //   host: 'localhost',
    // },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
