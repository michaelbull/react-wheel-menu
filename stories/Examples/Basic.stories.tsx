import React from 'react';
import {
    Item,
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

export const Basic: StoryObj = {
    name: 'Basic',
    render: () => {
        return (
            <RadialWheel style={{ width: '300px', height: '300px' }}>
                <Slice style={{ backgroundColor: 'red' }} from={300} to={60}>
                    <Item>
                        <Label style={{ color: 'white' }}>
                            One
                        </Label>
                    </Item>
                </Slice>

                <Slice style={{ backgroundColor: 'green' }} from={60} to={180}>
                    <Item>
                        <Label style={{ color: 'white' }}>
                            Two
                        </Label>
                    </Item>
                </Slice>

                <Slice style={{ backgroundColor: 'blue' }} from={180} to={300}>
                    <Item>
                        <Label style={{ color: 'white' }}>
                            Three
                        </Label>
                    </Item>
                </Slice>
            </RadialWheel>
        );
    }
};
