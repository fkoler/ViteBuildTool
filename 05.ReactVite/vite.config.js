import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    clearScreen: false,
    envPrefix: 'VITE_',
    // logLevel: 'silent',
    logLevel: 'info',
    // envDir: 'direnv',
    envDir: '.',

    server: {
        open: 'index.html',
        port: 3000,
        strictPort: true,
    },

    preview: {
        port: 8080,
        strictPort: true,
    },

    css: {
        devSourcemap: true,
    },

    plugins: [react()],
});
