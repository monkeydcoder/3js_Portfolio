import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User/root GitHub Pages site (monkeydcoder.github.io) is served from the root,
// so the base path is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  // React Three Fiber ships its own reconciler; dedupe React so the app and the
  // 3D renderer share a single copy (otherwise hooks throw "Invalid hook call").
  resolve: {
    dedupe: ['react', 'react-dom', 'three', '@react-three/fiber'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei'],
  },
})
