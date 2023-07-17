import React, { CSSProperties } from 'react';
import {
    CircleMenu,
    Label,
    Layout,
    Slice,
    Spoke
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';

const meta: Meta = {
    title: 'Tests/Labels',
    parameters: {
        layout: 'centered'
    }
};

export default meta;

const menuStyle: CSSProperties = {
    width: 600,
    height: 600,
    color: 'white',
    backgroundColor: 'hsl(0, 0%, 80%)'
};

const labelStyle: CSSProperties = {
    margin: '1em'
};

function Body() {
    return (
        <>
            <Layout direction="vertical" justify="start">
                <Label orient="outwards" style={labelStyle} offset={-30}>Bottom</Label>
            </Layout>

            <Layout direction="horizontal" justify="center">
                <Label orient="clockwise" style={labelStyle}>Left</Label>
                <Label orient="counterclockwise" style={labelStyle}>Right</Label>
            </Layout>

            <Layout direction="vertical" justify="end">
                <Label orient="inwards" style={labelStyle}>Top</Label>
            </Layout>
        </>
    );
}

export const SlicesStory: StoryObj = {
    name: 'Slices',
    render: () => {
        return (
            <CircleMenu style={menuStyle}>
                <Slice from={315} to={45} style={{ backgroundColor: 'red' }}>
                    <Body />
                </Slice>

                <Slice from={45} to={135} style={{ backgroundColor: 'green' }}>
                    <Body />
                </Slice>

                <Slice from={135} to={225} style={{ backgroundColor: 'yellow' }}>
                    <Body />
                </Slice>

                <Slice from={225} to={315} style={{ backgroundColor: 'blue' }}>
                    <Body />
                </Slice>
            </CircleMenu>
        );
    }
};

export const SpokesStory: StoryObj = {
    name: 'Spokes',
    render: () => {
        const width = 120;
        const offset = -(width / 2);
        const height = `calc(50% - ${width / 2}px)`;

        return (
            <CircleMenu style={menuStyle}>
                <Spoke angle={45} offset={offset} style={{ width, height, backgroundColor: 'red' }}>
                    <Body />
                </Spoke>

                <Spoke angle={135} offset={offset} style={{ width, height, backgroundColor: 'green' }}>
                    <Body />
                </Spoke>

                <Spoke angle={225} offset={offset} style={{ width, height, backgroundColor: 'yellow' }}>
                    <Body />
                </Spoke>

                <Spoke angle={315} offset={offset} style={{ width, height, backgroundColor: 'blue' }}>
                    <Body />
                </Spoke>
            </CircleMenu>
        );
    }
};
