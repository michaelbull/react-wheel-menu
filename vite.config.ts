import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

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
        rolldownOptions: {
            external: [
                'clsx',
                'react',
                'react/jsx-runtime',
                'react-compiler-runtime',
                'react-use-rect',
            ],
        },
    },
    plugins: [
        react(),
        babel({
            presets: [
                reactCompilerPreset({
                    target: '17',
                }),
            ],
        }),
        dts({
            tsconfigPath: './tsconfig.app.json',
            exclude: [
                '**/*.stories.*',
                '**/*.test.ts',
                '**/*.test.tsx',
                '**/*.spec.ts',
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
