import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import TailwindCSS from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    VueRouter(),
    Vue(),
    TailwindCSS(),
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
