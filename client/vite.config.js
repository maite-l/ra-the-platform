import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // has to be changed to correct port of backend every time it is restarted (ddev link doesnt work)
        target: "https://127.0.0.1:51709",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
