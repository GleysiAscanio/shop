import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { vikePlugin } from 'vike/plugin'
import vike from 'vike/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/shop/",
  plugins: [react(), vike({ prerender: true })
    // vikePlugin({ prerender: true })
  ],
  build: {
    outDir: 'dist/client/',
  }
})
