import { defineConfig } from 'vite';

export default defineConfig(({ command, mode, ssrBuild }) => {
    console.log(command, mode, ssrBuild);

    if (mode === 'production') {
        return {
            base: '/vite/',
        };
    }

    return {};
});
