import '../style.css';
import './preview.css';
import { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        actions: {
            argTypesRegex: '^on[A-Z].*'
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        options: {
            storySort: {
                order: [
                    ['Basic Example', 'CS:GO Buy Menu'],
                    'Tests'
                ]
            }
        }
    }
};

export default preview;
