import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure the base path for GitHub Pages deployment.
  // This should match your repository name.
  base: '/BasicPro/', 
  server: {
    proxy: {
      // This proxy is for local development to connect frontend to backend
      // If you are not running a backend, this part can be removed or ignored.
      '/api': {
        target: 'http://127.0.0.1:3002', // Make sure this matches your backend port if you were using one
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})