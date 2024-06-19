import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://ezequielmariscal.github.io/Proyecto-infoReyunos",
  server: {
    port: 3000,
    }
})
