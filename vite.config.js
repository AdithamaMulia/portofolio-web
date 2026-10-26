import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' keeps dist/ portable: works on GH Pages subpath, Vercel, Netlify, or local file serving
export default defineConfig({
  base: '/portofolio-web',
  plugins: [vue()],
})
