import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Plugin as importToCDN } from "vite-plugin-cdn-import"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      prodUrl: 'https://cdn.jsdelivr.net/npm/{name}@{version}/{path}',
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'dist/vue.global.js',
        },
        {
          name: 'vue-demi',
          var: 'VueDemi',
          path: 'lib/index.iife.js',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'dist/index.full.js',
          css: 'dist/index.css'
        },
      ]
    }),
  ],
})
