import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {  // 프록시할 경로
        target: 'http://localhost:3000', // 백엔드 서버 주소
        changeOrigin: true, 
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 제거 
      }
    }
  }
})
