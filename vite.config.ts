import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['1157-2a03-f680-fe04-25e1-9c08-d60c-b0e3-f62e.ngrok-free.app'],
  },
})
