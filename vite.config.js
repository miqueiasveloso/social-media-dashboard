import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/social-media-dashboard/', // Ensure this matches your GitHub repository name
  plugins: [react()],
});
