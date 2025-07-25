import { defineConfig, type UserConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    setupFiles: './jest-setup.ts',
    globals: true,
  }
} as UserConfig)
