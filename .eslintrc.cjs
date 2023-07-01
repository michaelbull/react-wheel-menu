/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
    env: {
        browser: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
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
        'react/jsx-uses-vars': 'warn',
        'react/jsx-uses-react': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
