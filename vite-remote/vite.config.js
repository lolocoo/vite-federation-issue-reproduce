import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
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
    vitePluginImp({
      libList: [{
        libName: "antd",
        style: (name) => `antd/lib/${name}/style/index.less`,
      }, ],
    }),
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
        antd: {
          singleton: true
        }
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
