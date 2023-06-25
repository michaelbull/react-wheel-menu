import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { RollupOptions } from 'rollup';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import pkg from './package.json' assert { type: 'json' };

const srcOptions: RollupOptions = {
    input: 'src/index.ts',
    output: [
        {
            format: 'cjs',
            file: pkg.main
        },
        {
            format: 'esm',
            file: pkg.module
        }
    ],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.build.json'
        }),
        terser()
    ],
    external: [
        'react',
        'react/jsx-runtime'
    ]
};

const typesOptions: RollupOptions = {
    input: 'dist/types/index.d.ts',
    output: {
        file: 'dist/index.d.ts'
    },
    plugins: [
        dts(),
        del({
            hook: 'buildEnd',
            targets: 'dist/types'
        })
    ]
};

export default [srcOptions, typesOptions];
