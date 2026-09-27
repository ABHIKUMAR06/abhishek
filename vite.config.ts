import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base keeps asset URLs correct on GitHub Pages project sites.
  base: './',
  plugins: [react(), tailwindcss()],
})
