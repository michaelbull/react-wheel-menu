import React, {
    CSSProperties,
    MouseEvent
} from 'react';
import {
    CircleMenu,
    Label,
    Layout,
    Slice
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'centered'
    }
};

export default meta;

export const Basic: StoryObj = {
    name: 'Basic',
    parameters: {
        options: { showPanel: false }
    },
    render: () => {
        const red: CSSProperties = { backgroundColor: 'red', color: 'white' };
        const yellow: CSSProperties = { backgroundColor: 'yellow', color: 'black' };
        const green: CSSProperties = { backgroundColor: 'green', color: 'white' };
        const blue: CSSProperties = { backgroundColor: 'blue', color: 'white' };

        function onClickBlue(event: MouseEvent<HTMLButtonElement>) {
            console.log('Clicked blue', event);
        }

        return (
            <CircleMenu style={{ width: 300, height: 300 }}>
                <Slice from={315} to={45} style={red}>
                    <Layout>
                        <Label>Red</Label>
                    </Layout>
                </Slice>

                <Slice from="45deg" to="37.5%" style={yellow}>
                    <Layout direction="vertical" justify="start">
                        <Label orient="outwards" offset={-30}>Start</Label>
                    </Layout>

                    <Layout direction="horizontal" justify="center">
                        <Label orient="upwards" offset={-10}>Up</Label>
                        <Label orient="downwards" offset={-10}>Down</Label>
                    </Layout>

                    <Layout direction="vertical" justify="end">
                        <Label orient="inwards" offset={10}>End</Label>
                    </Layout>
                </Slice>

                <Slice from="37.5%" to="3.92699rad" style={blue} as="button" onClick={onClickBlue}>
                    <Layout>
                        <Label>Blue</Label>
                    </Layout>
                </Slice>

                <Slice from="3.92699rad" to="0.875turn" style={green} as="a" href="https://example.com" target="_blank">
                    <Layout>
                        <Label>Green</Label>
                    </Layout>
                </Slice>
            </CircleMenu>
        );
    }
};
