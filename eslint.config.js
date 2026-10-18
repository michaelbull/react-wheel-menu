import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import { reactRefresh } from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import {
    defineConfig,
    globalIgnores,
} from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
    globalIgnores([
        'coverage',
        'dist',
        'storybook-static',
    ]),
    {
        files: ['**/*.{js,jsx,mjs,ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
            eslintReact.configs['recommended-type-checked'],
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite(),
        ],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            'react-x': {
                version: '17.0.0',
            },
        },
    },
    {
        files: ['**/*.{js,mjs}'],
        extends: [
            tseslint.configs.disableTypeChecked,
        ],
    },
    storybook.configs['flat/recommended'],
);
