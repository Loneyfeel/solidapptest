import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['b8a0-2a03-f680-fe04-4070-602b-b73b-244-57de.ngrok-free.app'],
  },
})
