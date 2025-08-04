import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: '.storybook/vite.config.ts',
            },
        },
    },
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-docs',
    ],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
        },
    },
};

export default config;
