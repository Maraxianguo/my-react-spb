import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import httpProxyMiddleware from 'http-proxy-middleware'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:5173,
    proxy:{
      "/api":{
        target: "http://localhost:8080",
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, "/api"),// 将 /api 重写
      }
    }
  }

})


