import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const root = resolve(__dirname, 'src');


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root,
      "@config": resolve(__dirname, "src/config"),
      "@shared": resolve(__dirname, "src/shared"),
      "@router": resolve(__dirname, "src/router"),
      "@features": resolve(__dirname, "src/features"),
      "@assets": resolve(__dirname, "src/assets"),
    }
  }
})
