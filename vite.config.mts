import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
    return {
        plugins: [react(), svgr(), tsconfigPaths()],
        build: {
            outDir: './build'
        }
    };
});