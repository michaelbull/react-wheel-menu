/**
 * @type {import('@types/eslint').Linter.Config}
 */
module.exports = {
    root: true,
    env: {
        browser: true
    },
    extends: [
        'eslint:recommended',
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
    settings: {
        react: {
            version: 'detect'
        }
    }
};
