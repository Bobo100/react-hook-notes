import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-hook-notes/',
  plugins: [react()],
  server: { port: 3000 },
})
