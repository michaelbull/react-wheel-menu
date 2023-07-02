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
                <Slice style={{ backgroundColor: 'red' }} from={0} to={120}>
                    <Item>
                        <Label style={{ color: 'white' }}>
                            One
                        </Label>
                    </Item>
                </Slice>

                <Slice style={{ backgroundColor: 'green' }} from={120} to={240}>
                    <Item>
                        <Label style={{ color: 'white' }}>
                            Two
                        </Label>
                    </Item>
                </Slice>

                <Slice style={{ backgroundColor: 'blue' }} from={240} to={360}>
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
