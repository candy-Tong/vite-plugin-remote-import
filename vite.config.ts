import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [],
  build: {
    lib: {
      entry: './index.ts',
      name: 'TdsVueCore',
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
  },
});
