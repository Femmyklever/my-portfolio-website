import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true, 
    port: 300,  
  },
  css: {
    postcss: './postcss.config.js', 
  },
})