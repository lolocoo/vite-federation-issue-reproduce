import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

import pkg from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 8003,
  },
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button',
      },
      shared: {
        // ...pkg.dependencies,
        react: {
          singleton: true
        },
        'react-dom': {
          singleton: true
        },
      },
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
