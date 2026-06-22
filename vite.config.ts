import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` controls the path the site is served from.
//   - Vercel / custom domain:        leave VITE_BASE unset  -> '/'
//   - GitHub Pages project site:     set VITE_BASE='/<repo-name>/'
// The GitHub Actions workflow sets this automatically.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
