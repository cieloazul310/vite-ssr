import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import mdx from '@mdx-js/rollup';

const config = defineConfig({
  base: '/vite-ssr',
  plugins: [react(), mdx({ jsxImportSource: '@emotion/react' }), ssr()],
});

export default config;
