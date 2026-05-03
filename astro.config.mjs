import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://iarandu.tech',
  vite: {
    plugins: [tailwindcss()],
  },
});
