import { defineConfig } from '@tanstack/start/config'
import netlify from 'vinxi/adapter/netlify' // Import yang bener dari vinxi

export default defineConfig({
  start: {
    adapter: netlify(), // Pakai adapter ini
  },
})