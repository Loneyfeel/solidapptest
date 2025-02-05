import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5fd3-2a03-f680-fe04-4070-e01d-950a-e546-db5b.ngrok-free.app'],
  },
})
