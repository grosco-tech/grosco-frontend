import path from 'path';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});