/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
    root: true,
    env: {
        browser: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks'
    ],
    rules: {
        '@typescript-eslint/consistent-type-imports': 'error'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
