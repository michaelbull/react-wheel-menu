/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'react/jsx-uses-vars': 'warn',
        'react/jsx-uses-react': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    }
};
