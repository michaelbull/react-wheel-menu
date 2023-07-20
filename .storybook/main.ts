import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    framework: '@storybook/react-vite',
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false
            }
        }
    }
};

export default config;
