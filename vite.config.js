import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000 // Default port for Vite
  },
  plugins: [
    // Add Vue plugin if using Vue components
    // vue()
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
});
