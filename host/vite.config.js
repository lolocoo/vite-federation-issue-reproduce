import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 8000,
  },
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        components: 'http://localhost:8001/assets/remoteEntry.js',
        webpack: {
          external: 'http://localhost:8002/remoteEntry.js',
          format: 'var',
        }
      },
      shared: {
        react: {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
      },
    }),
  ]
})
