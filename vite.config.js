// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/company-portfolio/',
  plugins: [react()],
  esbuild: {
    loader: "jsx"
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",       
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': '.jsx',
      }
    }
  },
});
