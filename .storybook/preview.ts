import '../style.css';
import './preview.css';
import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: [
                    'Examples',
                    [
                        'Counter-Strike',
                        'Grand Theft Auto',
                        'League of Legends',
                        'Overwatch',
                        'Genshin Impact',
                    ],
                ],
                includeNames: true,
            },
        },
    },
};

export default preview;
