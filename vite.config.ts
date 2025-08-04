/// <reference types="vitest" />

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            fileName: 'index',
            formats: [
                'es',
                'cjs',
            ],
        },
        rollupOptions: {
            external: [
                'clsx',
                'react',
                'react/jsx-runtime',
                'react-use-rect',
            ],
        },
    },
    plugins: [
        dts({
            tsconfigPath: './tsconfig.app.json',
            exclude: [
                'src/stories',
            ],
        }),
    ],
    test: {
        coverage: {
            include: [
                'src',
            ],
            exclude: [
                '**/*.stories.*',
            ],
        },
    },
});
