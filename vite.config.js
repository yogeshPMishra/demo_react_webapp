import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : 'https://yogeshpmishra.github.io/demo_react_webapp/',
  plugins: [react()],
})
