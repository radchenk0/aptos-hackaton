import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      styles: '/src/styles/index.scss',
      components: '/src/components/index.ts',
      utils: '/src/utils/index.ts',
    },
  },
});
