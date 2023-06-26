import React from 'react';
import {
    Button,
    Label,
    RadialWheel,
    Slice
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import './CsGoBuyMenu.css';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'centered'
    }
};

export default meta;

export const BasicExample: StoryObj = {
    name: 'Basic Example',
    render: () => {
        return (
            <RadialWheel style={{ width: '300px', height: '300px' }}>
                <Slice style={{ background: 'red' }} from={0} to={120}>
                    <Button>
                        <Label style={{ color: 'white' }}>
                            One
                        </Label>
                    </Button>
                </Slice>

                <Slice style={{ background: 'green' }} from={120} to={240}>
                    <Button>
                        <Label style={{ color: 'white' }}>
                            Two
                        </Label>
                    </Button>
                </Slice>

                <Slice style={{ background: 'blue' }} from={240} to={360}>
                    <Button>
                        <Label style={{ color: 'white' }}>
                            Three
                        </Label>
                    </Button>
                </Slice>
            </RadialWheel>
        );
    }
};
