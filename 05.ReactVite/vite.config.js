import {
    defineConfig,
    // loadEnv
} from 'vite';
import react from '@vitejs/plugin-react';

// import process from 'process';

// https://vitejs.dev/config/
export default defineConfig(
    // ({ mode }) => {
    // const env = loadEnv(mode, process.cwd(), 'VITE_');
    // console.log(env);

    // return
    {
        clearScreen: false,
        envPrefix: 'TEST_',
        plugins: [react()],
    }
    // }
);
