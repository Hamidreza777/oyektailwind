import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/oyektailwind",

  plugins: [react()],
  server: {
    host: true
  }
})
