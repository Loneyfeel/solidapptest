import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['633e-2a03-f680-fe04-4615-e5e0-1961-6939-f30b.ngrok-free.app'],
  },
})
