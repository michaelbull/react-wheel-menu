import React from 'react';
import {
    Anchor,
    Button,
    CircleMenu,
    Item,
    Label,
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
        function onClickBlue() {
            console.log('Clicked blue');
        }

        return (
            <CircleMenu style={{ width: 300, height: 300 }}>
                <Slice from={300} to={60}>
                    <Item style={{ backgroundColor: 'red' }}>
                        <Label style={{ color: 'white' }}>
                            Red
                        </Label>
                    </Item>
                </Slice>

                <Slice from={60} to={180}>
                    <Button style={{ backgroundColor: 'blue' }} onClick={onClickBlue}>
                        <Label style={{ color: 'white' }}>
                            Blue
                        </Label>
                    </Button>
                </Slice>

                <Slice from={180} to={300}>
                    <Anchor style={{ backgroundColor: 'green' }} href="https://www.example.com" target="_blank">
                        <Label style={{ color: 'white' }}>
                            Green
                        </Label>
                    </Anchor>
                </Slice>
            </CircleMenu>
        );
    }
};
