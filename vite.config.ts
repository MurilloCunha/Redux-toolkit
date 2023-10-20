import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
const manifest = require('./public/manifest.json');

export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      strategies: 'generateSW',
      registerType: 'autoUpdate', 
      devOptions: {
        enabled: true
      },
      injectRegister: 'script',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg, webp}'],
        cleanupOutdatedCaches: true,
        sourcemap: true,

      },
      includeAssets: ['apple-touch-icon.png'],
      manifest: manifest,
      
    })
  ],
})
