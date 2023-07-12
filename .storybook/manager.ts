import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import pkg from '../package.json' assert { type: 'json' };

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: `${pkg.name} v${pkg.version}`,
        brandUrl: pkg.homepage
    })
});
