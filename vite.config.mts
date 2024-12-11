import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }: { mode: string }) => {
    const env = loadEnv(mode, process.cwd())
    process.env = { ...process.env, ...env }
    return {
        plugins: [react(), svgr(), tsconfigPaths()],
        build: {
            outDir: './build',
        },
        test: {
            environment: 'jsdom',
        },
    }
})
